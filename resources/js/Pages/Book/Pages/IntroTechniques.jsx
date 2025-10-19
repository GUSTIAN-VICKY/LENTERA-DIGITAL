import React from 'react';

export default function IntroTechniques({ isActive }) {
    return (
        <div className={`page ${isActive ? 'active' : ''}`} data-page="4">
            <div className="page-number-display">4</div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2 fade-in">3 Jurus Ampuh Pelindung Digital</h2>
            <p className="text-center text-gray-500 mb-8 fade-in delay-1">Langkah praktis yang bisa langsung Anda coba.</p>
            <div className="space-y-4">
                <div className="bg-white/70 backdrop-blur-sm p-5 rounded-lg border-2 border-blue-200 flex items-center gap-4 fade-in delay-2 shadow-sm">
                    <div className="flex-shrink-0 text-blue-600">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-blue-800">Jurus 1: Akun Aman, Bisnis Nyaman</h3>
                        <p className="text-gray-600 text-sm">Mengamankan WhatsApp dan Akun Google, aset terpenting Anda.</p>
                    </div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-5 rounded-lg border-2 border-green-200 flex items-center gap-4 fade-in delay-3 shadow-sm">
                    <div className="flex-shrink-0 text-green-600">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a9.97 9.97 0 01-1.563 3.029m0 0l-2.147 2.146M12 19c-2.4 0-4.63-.8-6.357-2.187"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-green-800">Jurus 2: Benteng Konten Negatif</h3>
                        <p className="text-gray-600 text-sm">Menyaring tontonan dan informasi yang aman untuk anak.</p>
                    </div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm p-5 rounded-lg border-2 border-red-200 flex items-center gap-4 fade-in delay-4 shadow-sm">
                    <div className="flex-shrink-0 text-red-600">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-red-800">Jurus 3: Teropong Aplikasi Jahat</h3>
                        <p className="text-gray-600 text-sm">Mendeteksi dan membersihkan aplikasi berbahaya dari HP.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

