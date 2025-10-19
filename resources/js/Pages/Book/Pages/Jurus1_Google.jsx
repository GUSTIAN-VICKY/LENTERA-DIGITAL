import React, { useState, useEffect } from 'react';
import { stepsData } from '../stepsData';
import googleLogo from '@/../images/2993685_brand_brands_google_logo_logos_icon.png';

export default function Jurus1_Google({ isActive }) {
    const googleSteps = stepsData.google;
    const [activeStepIndex, setActiveStepIndex] = useState(0);

    const handleStepClick = (index) => {
        const screen = document.getElementById('google-phone-screen');
        if (screen) {
            screen.style.opacity = 0;
            setTimeout(() => {
                screen.src = googleSteps[index].img;
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
        <div className={`page ${isActive ? 'active' : ''} flex-col !justify-start`} data-page="6">
            <div className="page-number-display">6</div>
            {/* Judul & Logo */}
            <div className="flex items-center justify-center mb-3 fade-in">
                <img src={googleLogo} alt="Logo Google" className="h-8 w-8 mr-2.5 rounded-full" />
                <h2 className="text-2xl font-bold text-center text-gray-800">Jurus 1: Amankan Akun Google</h2>
            </div>
            <p className="text-center text-gray-500 mb-6 fade-in delay-1">Kunci pintu utama data pribadi dan bisnis Anda.</p>

            {/* Tata Letak Utama */}
            <div className="flex-grow grid md:grid-cols-2 gap-6 items-start">
                {/* Kolom Kiri: Langkah-langkah */}
                <div className="fade-in delay-2 flex flex-col space-y-2.5">
                    {googleSteps.map((step, index) => (
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
                        <div className="phone-screen bg-white"> {/* Background putih untuk Google */}
                            <img
                                id="google-phone-screen"
                                src={googleSteps.length > 0 ? googleSteps[0].img : ''}
                                alt="Google Step"
                                className="transition-opacity duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}