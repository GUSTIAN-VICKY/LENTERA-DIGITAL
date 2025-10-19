import React from 'react';

// --- GUNAKAN NAMA FILE DENGAN SPASI ---
import logoKkn from '../../../../images/logo kkn nobg v.1.0.png'; // Nama file DENGAN spasi
import logoUsm from '../../../../images/LOGO USMJAYA.png'; // Nama file DENGAN spasi
// import logoLppm from '../../../../images/logo lppm.png'; // Uncomment jika perlu

export default function AboutProgram({ isActive }) {
    return (
        <div className={`page ${isActive ? 'active' : ''} flex-col !justify-start`} data-page="12">
            <div className="page-number-display">12</div>
            <div className="page-content-scroll w-full">
                <h2 className="text-3xl font-bold text-center text-blue-900 drop-shadow-sm fade-in">Di Balik Lentera Digital</h2>
                <p className="text-center text-gray-600 mt-2 mb-8 fade-in delay-1">Sebuah program dari hati untuk komunitas.</p>
                <div className="space-y-4">
                     {/* Bagian info penyusun, program, tujuan */}
                     <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl shadow-sm flex items-start gap-4 fade-in delay-2 border">
                        <div className="flex-shrink-0 text-blue-600 bg-blue-100 p-3 rounded-full">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">Penyusun</h3>
                            <p className="text-gray-600">Gustian Vicky Hernandy (G.231.22.0164)</p>
                        </div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl shadow-sm flex items-start gap-4 fade-in delay-3 border">
                        <div className="flex-shrink-0 text-blue-600 bg-blue-100 p-3 rounded-full">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547 2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547 2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477zM15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">Program</h3>
                            <p className="text-gray-600">Kuliah Kerja Nyata (KKN) PPM XXVII Universitas Semarang</p>
                        </div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl shadow-sm flex items-start gap-4 fade-in delay-4 border">
                         <div className="flex-shrink-0 text-blue-600 bg-blue-100 p-3 rounded-full">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">Tujuan Program</h3>
                            <p className="text-gray-600">Memberdayakan <b>semua pengguna digital</b>—orang tua, pelaku UMKM, dan masyarakat umum—dengan keterampilan praktis untuk menciptakan lingkungan online yang aman.</p>
                        </div>
                    </div>
                </div>

                {/* Bagian Logo */}
                <div className="flex items-center justify-center gap-8 mt-8 fade-in delay-5">
                    <img
                        src={logoUsm}
                        alt="Logo USM"
                        className="h-12 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
                    />
                    <img
                        src={logoKkn}
                        alt="Logo KKN"
                        className="h-12 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
                     />
                </div>
            </div>
        </div>
    );
}