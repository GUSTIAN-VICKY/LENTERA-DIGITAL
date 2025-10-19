import React, { useState, useEffect } from 'react';
import { stepsData } from '../stepsData';
import whatsappLogo from '../../../../images/4102606_applications_media_social_whatsapp_icon.png';

export default function Jurus1_WA({ isActive }) {
    const waSteps = stepsData.wa;
    const [activeStepIndex, setActiveStepIndex] = useState(0);

    const handleStepClick = (index) => {
        const screen = document.getElementById('wa-phone-screen');
        if (screen) {
            screen.style.opacity = 0;
            setTimeout(() => {
                // Ganti sumber gambar mockup (jika Anda punya screenshot asli)
                // screen.src = `/path/to/your/screenshots/wa_${index + 1}.png`; // Contoh
                 screen.src = waSteps[index].img; // Gunakan placeholder jika tidak ada
                screen.style.opacity = 1;
            }, 200);
        }
        setActiveStepIndex(index);
    };

    useEffect(() => {
        if (isActive) {
            handleStepClick(0);
        }
    }, [isActive]);


    return (
        <div className={`page ${isActive ? 'active' : ''} flex-col !justify-start`} data-page="5">
            <div className="page-number-display">5</div>

            {/* Judul & Logo sedikit diubah */}
            <div className="flex items-center justify-center mb-3 fade-in"> {/* Margin bawah ditambah */}
                <img src={whatsappLogo} alt="Logo WhatsApp" className="h-9 w-9 mr-2.5" /> {/* Ukuran sedikit lebih besar, margin kanan ditambah */}
                <h2 className="text-2xl font-bold text-center text-gray-800">Jurus 1: Amankan Akun WhatsApp</h2>
            </div>
            <p className="text-center text-gray-500 mb-6 fade-in delay-1">Aktifkan Verifikasi Dua Langkah. Klik langkah di bawah!</p> {/* Margin bawah ditambah */}

            {/* Tata Letak Utama */}
            <div className="flex-grow grid md:grid-cols-2 gap-6 items-start"> {/* Ganti items-center jadi items-start, gap ditambah */}
                {/* Kolom Kiri: Langkah-langkah */}
                <div className="fade-in delay-2 flex flex-col space-y-2.5"> {/* Tambah flex-col dan space-y */}
                    {waSteps.map((step, index) => (
                        <div
                            key={index}
                            onClick={() => handleStepClick(index)}
                            // Class interaktif diambil dari CSS yang baru
                            className={`interactive-step ${activeStepIndex === index ? 'active' : ''}`}
                        >
                            <div
                                className="icon-container w-6 h-6" // Ukuran ikon tetap
                                dangerouslySetInnerHTML={{ __html: step.icon }}
                            />
                            <p className="font-semibold flex-1 text-gray-700">{step.title}</p> {/* Warna teks diatur */}
                        </div>
                    ))}
                </div>

                {/* Kolom Kanan: Mockup HP */}
                <div className="flex justify-center items-center fade-in delay-3 sticky top-5"> {/* Tambah sticky top-5 agar mockup tetap terlihat saat scroll di kiri */}
                    <div className="phone-mockup transform scale-105"> {/* Sedikit diperbesar */}
                        <div className="phone-screen bg-gray-200"> {/* Ganti background hitam jika placeholder */}
                            <img
                                id="wa-phone-screen"
                                // Gunakan placeholder awal yang lebih baik jika perlu
                                src={waSteps.length > 0 ? waSteps[0].img : ''}
                                alt="WhatsApp Step"
                                className="transition-opacity duration-200 ease-in-out" // Pastikan transisi opacity ada
                             />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}