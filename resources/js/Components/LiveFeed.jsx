import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Hubungkan ke domain Anda (seperti yang sudah Anda perbaiki)
const socket = io('https://lenteradigitalkkn.cloud', {
    path: "/socket.io/"
});

/**
 * Komponen baru untuk menata setiap baris log.
 */
function LogEntry({ log }) {
    // Tentukan warna badge berdasarkan metode HTTP
    let methodColor = 'bg-gray-100 text-gray-800'; // Default
    if (log.method === 'GET') methodColor = 'bg-blue-100 text-blue-800';
    if (log.method === 'POST') methodColor = 'bg-green-100 text-green-800';
    if (log.method === 'PUT' || log.method === 'PATCH') methodColor = 'bg-yellow-100 text-yellow-800';
    if (log.method === 'DELETE') methodColor = 'bg-red-100 text-red-800';

    // Tentukan warna status
    let statusColor = 'text-gray-500';
    if (log.status >= 200 && log.status < 300) statusColor = 'text-green-500';
    if (log.status >= 400 && log.status < 500) statusColor = 'text-yellow-500';
    if (log.status >= 500) statusColor = 'text-red-500';

    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 border-b border-gray-200 hover:bg-gray-50">
            <div className="flex items-center mb-2 sm:mb-0">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${methodColor}`}>{log.method}</span>
                <span className={`ml-3 font-bold ${statusColor}`}>{log.status}</span>
                <span className="ml-3 font-mono text-sm text-gray-800 truncate" title={log.request}>{log.request}</span>
            </div>
            <div className="flex-shrink-0 text-xs text-gray-500 font-mono text-right">
                <div>{log.ip}</div>
                <div title={log.user_agent}>{log.timestamp.split(' ')[0]}</div> 
            </div>
        </div>
    );
}


/**
 * Komponen Utama LiveFeed
 */
function LiveFeed() {
    const [logs, setLogs] = useState([]);
    const [totalHits, setTotalHits] = useState(0);
    const [uniqueIPs, setUniqueIPs] = useState(new Set());

    useEffect(() => {
        socket.connect();
        console.log('Menghubungkan ke server WebSocket...');

        // Sekarang kita menerima objek 'newLog' (JSON), bukan 'newLine' (teks)
        socket.on('new_log_entry', (newLog) => {

            // Tambahkan log baru ke atas daftar
            setLogs(prevLogs => [newLog, ...prevLogs.slice(0, 100)]); // Batasi 100 log

            // Perbarui statistik
            setTotalHits(prev => prev + 1);
            setUniqueIPs(prevIPs => new Set(prevIPs).add(newLog.ip));
        });

        return () => {
            socket.disconnect();
            console.log('Memutuskan koneksi WebSocket...');
        };
    }, []); // Array kosong berarti 'useEffect' hanya berjalan sekali

    return (
        <div className="live-feed-container">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Aktivitas Pengunjung (Real-Time)</h2>

            {/* --- KARTU STATISTIK --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="text-sm font-medium text-gray-500">Total Hits</div>
                    <div className="text-3xl font-bold text-gray-900">{totalHits}</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="text-sm font-medium text-gray-500">Visitor Unik</div>
                    <div className="text-3xl font-bold text-gray-900">{uniqueIPs.size}</div>
                </div>
            </div>

            {/* --- KOTAK LOG BARU (BUKAN HITAM) --- */}
            <div className="logs-box bg-white border border-gray-200 rounded-lg shadow-sm" style={{ height: '400px', overflowY: 'scroll' }}>
                {/* Render setiap baris log menggunakan komponen baru */}
                {logs.map((log, index) => (
                    <LogEntry key={index} log={log} />
                ))}
                {logs.length === 0 && (
                    <div className="p-4 text-center text-gray-500">Menunggu data log masuk...</div>
                )}
            </div>
        </div>
    );
}

export default LiveFeed;
