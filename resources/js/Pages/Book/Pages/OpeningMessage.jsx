import React from 'react';

// 'isActive' adalah prop yang dikirim dari Show.jsx untuk mengontrol animasi/visibilitas
export default function OpeningMessage({ isActive }) {
    return (
        <div className={`page ${isActive ? 'active' : ''} flex-col !justify-start`} data-page="2">
            <div className="page-number-display">2</div>
            <div className="page-content-scroll w-full">
                <div className="text-center mb-6 fade-in">
                    <h2 className="text-3xl font-bold text-gray-800">Apakah Buku Ini untuk Anda?</h2>
                    <p className="text-gray-600 mt-2">Dibuat dari keresahan nyata di <b>Kelurahan Kalicari</b>, untuk semua.</p>
                </div>
                <div className="space-y-4">
                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border-l-4 border-sky-500 flex items-start gap-4 fade-in delay-1 shadow-sm">
                        <div className="flex-shrink-0 text-sky-500">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.789-2.756 9.312M12 11c0-4.418 4.03-8 9-8s9 3.582 9 8-4.03 8-9 8c-1.01 0-1.97-.159-2.846-.447M12 11h-2a2 2 0 00-2 2v2a2 2 0 002 2h2M12 11V9a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2m-6 9v2m0-11.312a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25v-1.5z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-sky-800">Anda adalah Orang Tua?</h3>
                            <p className="text-gray-700 mt-1">Lindungi anak dari konten negatif dan bahaya tak terlihat di internet dengan jurus-jurus praktis.</p>
                        </div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border-l-4 border-amber-500 flex items-start gap-4 fade-in delay-2 shadow-sm">
                        <div className="flex-shrink-0 text-amber-500">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-amber-800">Anda Pelaku UMKM?</h3>
                            <p className="text-gray-700 mt-1">Amankan akun WhatsApp Business dan Google Anda agar bisnis lancar dan terhindar dari penipuan.</p>
                        </div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border-l-4 border-emerald-500 flex items-start gap-4 fade-in delay-3 shadow-sm">
                        <div className="flex-shrink-0 text-emerald-500">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-emerald-800">Anda Pengguna Digital?</h3>
                            <p className="text-gray-700 mt-1">Tingkatkan keamanan data pribadi, rekening bank, dan semua akun online Anda dari ancaman peretasan.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
