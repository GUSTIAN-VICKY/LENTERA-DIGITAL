import React from 'react';

export default function RecognizingThreats({ isActive }) {
    return (
        <div className={`page ${isActive ? 'active' : ''}`} data-page="3">
            <div className="page-number-display">3</div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 fade-in">Bahaya Terlihat vs. Bahaya Tersembunyi</h2>
            <div className="flex-grow grid md:grid-cols-2 gap-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center fade-in delay-1 border-2 border-blue-200 shadow-sm">
                    <h3 className="font-bold text-xl text-blue-800">Bahaya Terlihat</h3>
                    <p className="text-sm text-gray-500 mb-6">Gejala yang tampak di permukaan</p>
                    <div className="flex-grow flex flex-col justify-center items-center">
                        <svg className="w-24 h-24 text-blue-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <div className="space-y-3 text-blue-900 font-semibold">
                            <p className="bg-blue-200 px-4 py-2 rounded-md">ANAK MENJADI MALAS</p>
                            <p className="bg-blue-200 px-4 py-2 rounded-md">ANAK MUDAH MARAH</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 text-white rounded-lg p-6 flex flex-col items-center text-center fade-in delay-2 shadow-lg">
                    <h3 className="font-bold text-xl text-red-500">Bahaya Tersembunyi</h3>
                    <p className="text-sm text-gray-400 mb-6">Ancaman serius di balik layar</p>
                    <div className="flex-grow flex flex-col justify-center items-center">
                        <svg className="w-24 h-24 text-red-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <div className="space-y-3 text-white font-semibold">
                            <p className="bg-red-500/50 px-4 py-2 rounded-md">DATA KELUARGA DIJUAL</p>
                            <p className="bg-red-500/50 px-4 py-2 rounded-md">REKENING BANK TERANCAM</p>
                            <p className="bg-red-500/50 px-4 py-2 rounded-md">AKUN DIBAJAK</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-gray-600 text-sm mt-4 fade-in delay-3">Ini bisa terjadi saat anak meng-install aplikasi tidak dikenal seperti <b className="text-red-600">VPN gratis</b>.</p>
        </div>
    );
}

