import React from 'react';

// --- Impor file logo ---
// Jalur ini mengasumsikan gambar ada di 'resources/images/'
// Pastikan nama file TikTok tidak ada spasi (ganti spasi jadi _)
import youtubeLogo from '../../../../images/3146788_youtube_logo_icon.png';
import tiktokLogo from '../../../../images/7024783_tiktok_social media_icon.png'; // Pastikan nama file ini benar
import googleLogo from '../../../../images/2993685_brand_brands_google_logo_logos_icon.png';

export default function IntroJurus2({ isActive }) {
    return (
        <div className={`page ${isActive ? 'active' : ''}`} data-page="7">
            <div className="page-number-display">7</div>
            <h2 className="text-3xl font-bold text-center text-green-800 mb-2 fade-in">Jurus 2: Benteng Konten Negatif</h2>
            <p className="text-center text-gray-500 mb-8 fade-in delay-1">Ciptakan lingkungan online yang positif untuk anak-anak.</p>
            <div className="grid grid-cols-3 gap-6 text-center">

                {/* --- Gunakan variabel logo yang diimpor --- */}
                <div className="fade-in delay-2">
                    <img
                        src={youtubeLogo} // <-- Variabel logo YouTube
                        alt="Logo YouTube"
                        className="mx-auto h-32 w-32 object-contain rounded-2xl shadow-lg border-4 border-white transform hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="mt-4 font-bold text-lg">YouTube</h3>
                </div>

                <div className="fade-in delay-3">
                    <img
                        src={tiktokLogo} // <-- Variabel logo TikTok
                        alt="Logo TikTok"
                        className="mx-auto h-32 w-32 object-contain rounded-2xl shadow-lg border-4 border-white transform hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="mt-4 font-bold text-lg">TikTok</h3>
                </div>

                <div className="fade-in delay-4">
                    <img
                        src={googleLogo} // <-- Variabel logo Google
                        alt="Logo Google"
                        className="mx-auto h-32 w-32 object-contain rounded-2xl shadow-lg border-4 border-white transform hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="mt-4 font-bold text-lg">Google Search</h3>
                </div>
            </div>
        </div>
    );
}