import React from 'react';

// Impor logo KKN dan USM. Pastikan path keduanya sudah benar.
import logoKkn from '../../../../images/logo kkn nobg v.1.0.png';
import logoUsm from '../../../../images/LOGO USMJAYA.png';

export default function CertificateTemplate() {
    return (
        <>
            {/* =====================================================================
              VERSI PREVIEW (SEKARANG DINONAKTIFKAN)
              Untuk mengaktifkan kembali, hapus komentar di blok ini dan komentari blok PRODUKSI.
              =====================================================================
            */}
            {/*
            <div 
                id="certificate-template"
                className="relative mx-auto my-8 w-[1123px] h-[794px] bg-white text-gray-800 shadow-2xl overflow-hidden transform scale-[0.8] lg:scale-100 origin-top"
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                // ... Konten preview ada di sini ...
            </div>
            */}

            {/* =====================================================================
              VERSI PRODUKSI (AKTIF)
              Versi ini tersembunyi dan digunakan untuk generate PDF.
              =====================================================================
            */}
            <div 
                id="certificate-template" 
                className="fixed -left-[9999px] top-0 w-[1123px] h-[794px] bg-white text-gray-800 shadow-lg overflow-hidden" 
                style={{ fontFamily: "'Inter', sans-serif" }}
            >
                {/* Bentuk Dekoratif SVG di sudut-sudut */}
                <div className="absolute top-0 right-0 w-[550px] h-[350px] z-0">
                    <svg viewBox="0 0 550 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M550 0H248.868C303.011 41.5172 375.297 119.23 430.703 174.931C486.109 230.632 531.023 280 550 300V0Z" fill="#0EA5E9" fillOpacity="0.7"/>
                        <path d="M550 0H316.51C361.922 75.3409 414.992 153.945 470.398 209.646C525.804 265.347 550 300 550 300V0Z" fill="#334155"/>
                    </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-[550px] h-[350px] z-0">
                    <svg viewBox="0 0 550 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 350H301.132C246.989 308.483 174.703 230.77 119.297 175.069C63.8906 119.368 18.9766 70 0 50V350Z" fill="#0EA5E9" fillOpacity="0.7"/>
                        <path d="M0 350H233.49C188.078 274.659 135.008 196.055 79.6016 140.354C24.1953 84.6531 0 50 0 50V350Z" fill="#334155"/>
                    </svg>
                </div>

                <div className="relative w-full h-full py-16 px-24 flex flex-col z-10">
                    <header className="flex items-center gap-4 mb-12">
                        <img src={logoUsm} alt="Logo USM" className="h-20 w-20 object-contain" />
                        <img src={logoKkn} alt="Logo KKN" className="h-20 w-20 object-contain" />
                        <div>
                            <p className="font-bold text-slate-800 text-xl">LENTERA DIGITAL</p>
                        </div>
                    </header>

                    <main className="flex-1 flex flex-col justify-center items-start text-left">
                        <h1 className="text-6xl font-extrabold text-slate-800 tracking-wider">SERTIFIKAT</h1>
                        <h2 className="text-2xl font-light text-sky-600 tracking-[0.2em] mt-1">APRESIASI</h2>
                        <p className="mt-12 text-lg text-gray-500">Diberikan Kepada:</p>
                        <p id="certificate-name" className="text-6xl font-bold text-slate-800 mt-2 tracking-wide uppercase">
                            Nama Peserta
                        </p>
                        <p className="mt-8 max-w-lg text-gray-600 leading-relaxed text-sm">
                            Atas partisipasi aktif dan keberhasilan dalam menyelesaikan panduan interaktif "Lentera Digital", sebagai kontribusi dalam meningkatkan literasi dan keamanan digital di masyarakat.
                        </p>
                    </main>

                    <footer className="flex justify-end text-center pr-16">
                        <div>
                            <p className="text-4xl" style={{fontFamily: "'Great Vibes', cursive"}}>Gustian Vicky</p>
                            <div className="border-b border-gray-400 my-1"></div>
                            <p className="font-bold text-slate-800">GUSTIAN VICKY HERNANDY</p>
                            <p className="text-sm text-gray-500">Pelaksana Program LENTERA DIGITAL</p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}