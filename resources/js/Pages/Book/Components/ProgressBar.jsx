import React from 'react';

export default function ProgressBar({ currentPage, totalPages }) {
    const progress = (currentPage / totalPages) * 100;

    return (
        <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-gray-300">
            <div
                id="progress-bar"
                className="bg-amber-400 h-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}
