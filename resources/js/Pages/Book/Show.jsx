import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import ProgressBar from './Components/ProgressBar';
import FooterNav from './Components/FooterNav';
import CertificateTemplate from './Components/CertificateTemplate';
import Cover from './Pages/Cover';
import OpeningMessage from './Pages/OpeningMessage';
import RecognizingThreats from './Pages/RecognizingThreats';
import IntroTechniques from './Pages/IntroTechniques';
import Jurus1_WA from './Pages/Jurus1_WA';
import Jurus1_Google from './Pages/Jurus1_Google';
import IntroJurus2 from './Pages/IntroJurus2';
import Jurus2_YouTube from './Pages/Jurus2_YouTube';
import Jurus2_TikTok from './Pages/Jurus2_TikTok';
import Jurus2_GoogleFilters from './Pages/Jurus2_GoogleFilters';
import Jurus3_Teropong from './Pages/Jurus3_Teropong';
import AboutProgram from './Pages/AboutProgram';
import Certificate from './Pages/Certificate';
import Database from './Pages/Database';

export default function Show({ participants }) {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [showDatabase, setShowDatabase] = useState(false);

    const mainPages = [
        Cover, OpeningMessage, RecognizingThreats, IntroTechniques, Jurus1_WA,
        Jurus1_Google, IntroJurus2, Jurus2_YouTube, Jurus2_TikTok,
        Jurus2_GoogleFilters, Jurus3_Teropong, AboutProgram, Certificate
    ];

    const totalPagesToDisplay = mainPages.length;

    const navigateToPage = (index) => {
        if (index >= 0 && index < totalPagesToDisplay) {
            setShowDatabase(false);
            setCurrentPageIndex(index);
        }
    };

    const handleNext = () => {
        if ((currentPageIndex >= totalPagesToDisplay - 1 && !showDatabase) || showDatabase) {
             window.location.reload();
        } else {
            navigateToPage(currentPageIndex + 1);
        }
    };

    const handlePrev = () => {
        if (showDatabase) {
            setShowDatabase(false);
        } else {
             navigateToPage(currentPageIndex - 1);
        }
    };
    const handleStart = () => navigateToPage(1);
    const handleViewDb = () => setShowDatabase(true);
    const handleBackFromDb = () => setShowDatabase(false);

    // Efek untuk Sparkle
     useEffect(() => {
        const createSparkles = (containerId) => {
            const container = document.getElementById(containerId);
            if (!container) return;
            container.innerHTML = '';
            const numberOfSparkles = 25;
            for (let i = 0; i < numberOfSparkles; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle sparkle-item';
                const randomSizeFactor = Math.random();
                let size;
                if (randomSizeFactor < 0.7) { size = Math.random() * 1 + 0.5; }
                else if (randomSizeFactor < 0.95) { size = Math.random() * 1 + 1.5; }
                else { size = Math.random() * 1.5 + 2.5; }
                const initialOpacity = Math.random() * 0.5 + 0.1;
                sparkle.style.width = `${size}px`;
                sparkle.style.height = `${size}px`;
                sparkle.style.opacity = initialOpacity;
                let top, left;
                const edgeBias = 0.8;
                if (Math.random() < edgeBias) {
                    if (Math.random() < 0.5) {
                        top = Math.random() < 0.5 ? Math.random() * 20 : Math.random() * 20 + 80;
                        left = Math.random() * 100;
                    } else {
                        left = Math.random() < 0.5 ? Math.random() * 20 : Math.random() * 20 + 80;
                        top = Math.random() * 100;
                    }
                } else {
                     top = Math.random() * 60 + 20;
                     left = Math.random() * 60 + 20;
                }
                sparkle.style.top = `${Math.max(0, Math.min(100, top))}%`;
                sparkle.style.left = `${Math.max(0, Math.min(100, left))}%`;
                sparkle.style.animationDelay = `${Math.random() * 7}s`;
                sparkle.style.animationDuration = `${Math.random() * 3 + 5}s`;
                container.appendChild(sparkle);
            }
        };
        if (currentPageIndex === 0) createSparkles('sparkle-container');
        if (currentPageIndex === totalPagesToDisplay - 1) createSparkles('back-sparkle-container');
    }, [currentPageIndex, totalPagesToDisplay]);

    return (
        // --- PERUBAHAN className DI SINI ---
        // Hapus bg-gray-200, p-4. Tambahkan w-full
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
            <Head>
                <title>Lentera Digital - Panduan Interaktif</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Georgia&display=swap" rel="stylesheet" />
            </Head>

            <CertificateTemplate />
            <ProgressBar currentPage={currentPageIndex + 1} totalPages={totalPagesToDisplay} />

            {/* --- PERUBAHAN className DI SINI --- */}
            {/* Hapus max-w-2xl, rounded-xl, my-8, shadow-2xl. Tambahkan flex-grow */}
            <main id="book-container" className="book-container w-full bg-white overflow-hidden relative flex-grow">
                {showDatabase ? (
                    <Database isActive={true} participants={participants} />
                ) : (
                    mainPages.map((PageComponent, index) => (
                         <PageComponent
                            key={index}
                            isActive={index === currentPageIndex}
                            onStart={handleStart}
                            onViewDb={handleViewDb}
                            participants={participants}
                         />
                    ))
                )}
            </main>

            {/* --- PERUBAHAN className DI SINI --- */}
            {/* Ganti max-w-2xl menjadi w-full, hapus rounded-b-xl */}
            {currentPageIndex > 0 && (
                <FooterNav
                    onNext={handleNext}
                    onPrev={handlePrev}
                    currentPage={currentPageIndex + 1}
                    totalPages={totalPagesToDisplay}
                    isDbPage={showDatabase}
                    onBackFromDb={handleBackFromDb}
                    // Tambahkan className agar footer juga full-width
                    className="w-full"
                />
            )}
        </div>
    );
}
