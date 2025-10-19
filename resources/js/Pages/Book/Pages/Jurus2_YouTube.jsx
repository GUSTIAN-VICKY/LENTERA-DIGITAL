import React, { useState, useEffect } from 'react';
import { stepsData } from '../stepsData';
import youtubeLogo from '@/../images/3146788_youtube_logo_icon.png';

export default function Jurus2_YouTube({ isActive }) {
    const youtubeSteps = stepsData.youtube;
    const [activeStepIndex, setActiveStepIndex] = useState(0);

    const handleStepClick = (index) => {
        const screen = document.getElementById('youtube-phone-screen');
        if (screen) {
            screen.style.opacity = 0;
            setTimeout(() => {
                screen.src = youtubeSteps[index].img;
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
        <div className={`page ${isActive ? 'active' : ''} flex-col !justify-start`} data-page="8">
            <div className="page-number-display">8</div>
            {/* Judul & Logo */}
            <div className="flex items-center justify-center mb-3 fade-in">
                <img src={youtubeLogo} alt="Logo YouTube" className="h-8 w-8 mr-2.5" />
                <h2 className="text-2xl font-bold text-center text-gray-800">Filter Konten YouTube</h2>
            </div>
            <p className="text-center text-gray-500 mb-6 fade-in delay-1">Aktifkan Mode Terbatas untuk tontonan yang lebih aman.</p>

            {/* Tata Letak Utama */}
            <div className="flex-grow grid md:grid-cols-2 gap-6 items-start">
                {/* Kolom Kiri: Langkah-langkah */}
                <div className="fade-in delay-2 flex flex-col space-y-2.5">
                    {youtubeSteps.map((step, index) => (
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
                        <div className="phone-screen bg-white"> {/* Background putih untuk YouTube */}
                            <img
                                id="youtube-phone-screen"
                                src={youtubeSteps.length > 0 ? youtubeSteps[0].img : ''}
                                alt="YouTube Step"
                                className="transition-opacity duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}