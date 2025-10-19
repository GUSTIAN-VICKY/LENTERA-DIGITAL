import React from 'react';

export default function Cover({ isActive, onStart }) {
    return (
        <div className={`page ${isActive ? 'active' : ''} bg-gradient-to-br from-blue-900 via-gray-900 to-black overflow-hidden relative`} data-page="1">
            {/* Sparkle Container */}
            <div id="sparkle-container" className="absolute inset-0 z-0"></div>

            {/* --- PERUBAHAN UTAMA UNTUK SILUET KEKINIAN --- */}
            {/* Kontainer Efek Cahaya Ambient (dengan z-index lebih rendah dari konten) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Cahaya Radial 1: Kuning Emas di Kiri Atas (lebih fokus) */}
                <div
                    className="absolute rounded-full"
                    style={{
                        background: 'radial-gradient(circle at 10% 10%, rgba(255, 204, 0, 0.2) 0%, transparent 70%)',
                        width: 'clamp(300px, 60vw, 500px)', // Ukuran responsif
                        height: 'clamp(300px, 60vw, 500px)',
                        top: '-15%',
                        left: '-15%',
                        filter: 'blur(80px)', // Blur ekstrem
                        opacity: 0.8, // Opasitas lebih tinggi agar terlihat
                        animation: 'light-pulse 10s infinite ease-in-out alternate',
                        animationDelay: '0s'
                    }}
                ></div>

                {/* Cahaya Radial 2: Biru Soft di Kanan Bawah (lebih menyebar) */}
                <div
                    className="absolute rounded-full"
                    style={{
                        background: 'radial-gradient(circle at 90% 90%, rgba(0, 150, 255, 0.15) 0%, transparent 60%)',
                        width: 'clamp(400px, 70vw, 600px)', // Lebih besar
                        height: 'clamp(400px, 70vw, 600px)',
                        bottom: '-20%',
                        right: '-20%',
                        filter: 'blur(90px)', // Blur ekstrem
                        opacity: 0.7,
                        animation: 'light-pulse 12s infinite ease-in-out alternate',
                        animationDelay: '3s'
                    }}
                ></div>

                {/* Cahaya Radial 3: Ungu Lembut di Tengah Atas (fokus di area judul) */}
                <div
                    className="absolute rounded-full"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(150, 0, 255, 0.1) 0%, transparent 50%)',
                        width: 'clamp(350px, 50vw, 450px)',
                        height: 'clamp(350px, 50vw, 450px)',
                        top: '5%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        filter: 'blur(70px)',
                        opacity: 0.6,
                        animation: 'light-pulse 11s infinite ease-in-out alternate',
                        animationDelay: '6s'
                    }}
                ></div>
            </div>
            {/* --- AKHIR PERUBAHAN UTAMA --- */}


            {/* Konten Utama */}
            <div className="text-center relative z-20 flex flex-col justify-around h-full">
                <div className="fade-in">
                    <h1 className="font-black text-5xl md:text-6xl text-white drop-shadow-lg">LENTERA DIGITAL</h1>
                    <p className="text-lg md:text-xl text-blue-200 mt-2">Panduan Cerdas untuk Semua</p>
                </div>
                <div className="w-48 mx-auto fade-in delay-1">
                    {/* SVG Lentera */}
                    <svg viewBox="0 0 150 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="metalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: '#8e8e8e', stopOpacity: 1 }} />
                                <stop offset="50%" style={{ stopColor: '#5a5a5a', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#3a3a3a', stopOpacity: 1 }} />
                            </linearGradient>
                            <radialGradient id="glassGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                <stop offset="0%" style={{ stopColor: '#f0f9ff', stopOpacity: 0.3 }} />
                                <stop offset="100%" style={{ stopColor: '#e0f2fe', stopOpacity: 0.2 }} />
                            </radialGradient>
                            <radialGradient id="flameGradient" cx="50%" cy="80%" r="50%">
                                <stop offset="0%" style={{ stopColor: '#fefce8' }} />
                                <stop offset="50%" style={{ stopColor: '#fde047' }} />
                                <stop offset="100%" style={{ stopColor: '#f97316' }} />
                            </radialGradient>
                        </defs>
                        <path d="M50 20 C 50 5, 100 5, 100 20" stroke="url(#metalGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
                        <path d="M40 25 C 40 15, 110 15, 110 25 L 120 45 L 30 45 Z" fill="url(#metalGradient)" />
                        <rect x="35" y="45" width="80" height="5" rx="2" fill="#2a2a2a" />
                        <path d="M35 50 L 25 60 V 130 L 35 140 H 115 L 125 130 V 60 L 115 50 Z" fill="url(#metalGradient)" />
                        <path d="M40 55 L 30 65 V 125 L 40 135 H 110 L 120 125 V 65 L 110 55 Z" fill="url(#glassGradient)" stroke="#5a5a5a" strokeWidth="1" />
                        <g className="fire-glow">
                            <path d="M75 120 C 65 115, 65 95, 75 90 C 85 95, 85 115, 75 120 Z" fill="url(#flameGradient)" />
                        </g>
                        <rect x="35" y="140" width="80" height="15" rx="3" fill="url(#metalGradient)" />
                        <path d="M40 155 L 30 175 L 120 175 L 110 155 Z" fill="#2a2a2a" />
                    </svg>
                </div>
                <div className="fade-in delay-2">
                    <button
                        id="start-btn"
                        onClick={onStart}
                        className="mb-2 px-10 py-3 bg-amber-400 text-blue-900 font-bold rounded-full shadow-lg hover:bg-amber-500 transform hover:scale-105 transition-all duration-300"
                    >
                        Mulai Membaca
                    </button>
                    <p className="text-xs text-gray-400">Oleh: Gustian Vicky Hernandy</p>
                </div>
            </div>
        </div>
    );
}