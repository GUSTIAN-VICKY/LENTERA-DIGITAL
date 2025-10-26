import React from 'react';

// Terima prop 'className'
export default function FooterNav({ onNext, onPrev, currentPage, totalPages, isDbPage, onBackFromDb, className = '' }) {

    if (isDbPage) {
        return (
            // Tambahkan className={className}
            <footer id="footer-nav" className={`sticky bottom-0 bg-white/80 backdrop-blur-sm border-t p-2 z-40 ${className}`}>
                <div className="flex justify-between items-center max-w-2xl mx-auto"> {/* Batasi lebar konten di dalam footer */}
                    <button
                        onClick={onBackFromDb}
                        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                    >
                        &larr; Kembali ke Sertifikat
                    </button>
                    <div className="text-sm font-semibold text-gray-600">
                        Database Partisipan
                    </div>
                    <button
                        onClick={onNext}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                       Ulangi ↻
                    </button>
                </div>
            </footer>
        );
    }

    const isLastPage = currentPage === totalPages;

    return (
        // Tambahkan className={className}
        <footer id="footer-nav" className={`sticky bottom-0 bg-white/80 backdrop-blur-sm border-t p-2 z-40 ${className}`}>
            <div className="flex justify-between items-center max-w-2xl mx-auto"> {/* Batasi lebar konten di dalam footer */}
                <button
                    id="prev-btn"
                    onClick={onPrev}
                    disabled={currentPage <= 1}
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition disabled:opacity-40"
                >
                    &larr; Kembali
                </button>
                <div id="page-counter" className="text-sm font-semibold text-gray-600">
                    Halaman {currentPage} dari {totalPages}
                </div>
                <button
                    id="next-btn"
                    onClick={onNext}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    {isLastPage ? 'Ulangi ↻' : 'Selanjutnya →'}
                </button>
            </div>
        </footer>
    );
}
