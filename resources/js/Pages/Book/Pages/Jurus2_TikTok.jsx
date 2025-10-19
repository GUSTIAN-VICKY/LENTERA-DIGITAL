import React, { useState, useEffect } from 'react';
import { stepsData } from '../stepsData';
import tiktokLogo from '@/../images/7024783_tiktok_social media_icon.png';

export default function Jurus2_TikTok({ isActive }) {
    const tiktokSteps = stepsData.tiktok;
    const [activeStepIndex, setActiveStepIndex] = useState(0);

    const handleStepClick = (index) => {
        const screen = document.getElementById('tiktok-phone-screen');
        if (screen) {
            screen.style.opacity = 0;
            setTimeout(() => {
                screen.src = tiktokSteps[index].img;
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
        <div className={`page ${isActive ? 'active' : ''} flex-col !justify-start`} data-page="9">
            <div className="page-number-display">9</div>
            {/* Judul & Logo */}
            <div className="flex items-center justify-center mb-3 fade-in">
                <img src={tiktokLogo} alt="Logo TikTok" className="h-8 w-8 mr-2.5 rounded-lg" />
                <h2 className="text-2xl font-bold text-center text-gray-800">Filter Konten TikTok</h2>
            </div>
            <p className="text-center text-gray-500 mb-6 fade-in delay-1">Gunakan Mode Terbatas untuk menyaring konten.</p>

            {/* Tata Letak Utama */}
            <div className="flex-grow grid md:grid-cols-2 gap-6 items-start">
                {/* Kolom Kiri: Langkah-langkah */}
                <div className="fade-in delay-2 flex flex-col space-y-2.5">
                    {tiktokSteps.map((step, index) => (
                        <div
                            key={index}
                            onClick={() => handleStepClick(index)}
                            className={`interactive-step ${activeStepIndex === index ? 'active' : ''}`}
                        >
                            <div className="icon-container w-6 h-6" dangerouslySetInnerHTML={{ __html: step.icon }} />
                            <p className="font-semibold flex-1 text-gray-700">{step.title}</p>
                        </div>
                    ))}
                </div>

                {/* Kolom Kanan: Mockup HP */}
                <div className="flex justify-center items-center fade-in delay-3 sticky top-5">
                    <div className="phone-mockup transform scale-105">
                        <div className="phone-screen bg-black"> {/* Background hitam untuk TikTok */}
                            <img
                                id="tiktok-phone-screen"
                                src={tiktokSteps.length > 0 ? tiktokSteps[0].img : ''}
                                alt="TikTok Step"
                                className="transition-opacity duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}