import React from 'react';

// Terima prop baru: isDbPage dan onBackFromDb
export default function FooterNav({ onNext, onPrev, currentPage, totalPages, isDbPage, onBackFromDb }) {

    // Jika sedang di halaman database, tampilkan navigasi khusus
    if (isDbPage) {
        return (
            <footer id="footer-nav" className="sticky bottom-0 bg-white/80 backdrop-blur-sm border-t p-2 z-40 w-full max-w-2xl rounded-b-xl">
                <div className="flex justify-between items-center">
                    <button
                        onClick={onBackFromDb} // Tombol kembali dari DB
                        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                    >
                        &larr; Kembali ke Sertifikat
                    </button>
                    <div id="page-counter" className="text-sm font-semibold text-gray-600">
                        Database Partisipan
                    </div>
                     {/* Tombol Ulangi tetap ada di halaman DB */}
                    <button
                        onClick={onNext} // Fungsi onNext akan me-reload jika dipanggil dari sini
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                       Ulangi ↻
                    </button>
                </div>
            </footer>
        );
    }

    // Navigasi normal untuk halaman 2-13
    const isLastPage = currentPage === totalPages; // Cek jika ini halaman ke-13

    return (
        <footer id="footer-nav" className="sticky bottom-0 bg-white/80 backdrop-blur-sm border-t p-2 z-40 w-full max-w-2xl rounded-b-xl">
            <div className="flex justify-between items-center">
                <button
                    id="prev-btn"
                    onClick={onPrev} // Fungsi onPrev biasa
                    disabled={currentPage <= 1} // Halaman pertama (indeks 0) tidak bisa kembali
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition disabled:opacity-40"
                >
                    &larr; Kembali
                </button>
                <div id="page-counter" className="text-sm font-semibold text-gray-600">
                    Halaman {currentPage} dari {totalPages}
                </div>
                <button
                    id="next-btn"
                    onClick={onNext} // Fungsi onNext biasa
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    {/* Di halaman terakhir (13), tombol "Selanjutnya" menjadi "Ulangi" */}
                    {isLastPage ? 'Ulangi ↻' : 'Selanjutnya →'}
                </button>
            </div>
        </footer>
    );
}