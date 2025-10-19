import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

// --- Impor SEMUA logo ---
import logoUsm from '../../../../images/LOGO USMJAYA.png';
import logoLppm from '../../../../images/logo lppm.png';
import logoKkn from '../../../../images/logo kkn nobg v.1.0.png';
import logoLenteraBadge from '../../../../images/lentera digital new.png'; // Impor Logo Lentera Digital (Badge)

export default function Certificate({ isActive }) {
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [pdfError, setPdfError] = useState('');

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '', age: '', status: '', comment: '',
    });

    const generatePdf = async (name) => {
        setIsGeneratingPdf(true);
        setPdfError('');
        console.log("Memulai generatePdf...");

        const certificateElement = document.getElementById('certificate-template');
        const certificateNameElement = document.getElementById('certificate-name');

        if (!certificateElement || !certificateNameElement) {
            console.error("Elemen template tidak ditemukan.");
            setPdfError("Gagal memuat template. Coba muat ulang.");
            setIsGeneratingPdf(false);
            return false;
        }
        console.log("Elemen template ditemukan.");

        // ---- SET LOGO ASLI (Termasuk logo badge jika ada) ----
        // Note: Anda bisa menyesuaikan bagian ini jika template baru tidak menggunakan semua logo ini
        const usmImg = certificateElement.querySelector('img[alt="Logo USM"]');
        const lppmImg = certificateElement.querySelector('img[alt="Logo LPPM"]');
        const kknImg = certificateElement.querySelector('img[alt="Logo KKN"]');
        if (usmImg) usmImg.src = logoUsm;
        if (lppmImg) lppmImg.src = logoLppm;
        if (kknImg) kknImg.src = logoKkn;
        // ---- AKHIR SET LOGO ----

        certificateNameElement.textContent = name || 'Nama Peserta';

        try {
            console.log("Menunggu gambar logo dimuat...");
            await new Promise(resolve => setTimeout(resolve, 600)); // Penundaan singkat untuk memastikan render
            console.log("Memulai html2canvas...");

            const canvas = await html2canvas(certificateElement, { scale: 2, logging: true, useCORS: true });
            console.log("html2canvas selesai.");

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1123, 794] });
            pdf.addImage(imgData, 'PNG', 0, 0, 1123, 794);
            console.log("Menyimpan PDF...");
            pdf.save(`Sertifikat-Lentera-Digital-${name.replace(/ /g, '_')}.pdf`);
            console.log("PDF disimpan.");
            return true;
        } catch (error) {
            console.error("Error saat generate PDF:", error);
            setPdfError("Maaf, terjadi kesalahan: " + error.message);
            return false;
        } finally {
            console.log("Proses generatePdf selesai.");
            setIsGeneratingPdf(false);
            // Anda tidak perlu mengembalikan placeholder jika template sudah menggunakan logo asli
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPdfError('');
        post(route('certificate.store'), {
            preserveScroll: true,
            onStart: () => console.log("Memulai submit form..."),
            onSuccess: async () => {
                console.log("Submit form berhasil, memulai generate PDF...");
                const pdfSuccess = await generatePdf(data.name);
                if (pdfSuccess) { setIsSuccess(true); reset(); }
            },
            onError: (errs) => {
                console.error("Validation errors:", errs);
                setPdfError("Gagal menyimpan. Periksa isian Anda.");
            },
            onFinish: () => console.log("Submit form selesai."),
        });
    };

    const isLoading = processing || isGeneratingPdf;

    return (
        <div className={`page ${isActive ? 'active' : ''} bg-gradient-to-br from-blue-900 via-gray-900 to-black overflow-hidden`} data-page="13">
            <div id="back-sparkle-container" className="absolute inset-0 z-0"></div>
              <div className="absolute inset-0 z-10 opacity-70">
                <div className="silhouette-light" style={{width: '250px', height: '250px', top: '5%', left: '10%', animationDelay: '0s'}}></div>
                <div className="silhouette-light" style={{width: '200px', height: '200px', top: '40%', left: '60%', animationDelay: '4s'}}></div>
            </div>

            <div id="final-page-content" className="text-center relative z-20">
                {!isLoading && !isSuccess && (
                    <div id="certificate-form-container">
                        <h2 className="text-2xl font-bold text-white drop-shadow-sm">Satu Langkah Terakhir!</h2>
                        <p className="text-gray-300 mt-2 mb-6">Masukkan data dan komentar Anda.</p>
                        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                            {/* Input fields */}
                            <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} placeholder="Ketik nama lengkap Anda" className="w-full max-w-sm px-4 py-3 rounded-lg text-center bg-gray-200 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:outline-none" required />
                            {errors.name && <p className="text-red-400 text-sm -mt-3">{errors.name}</p>}
                            <input type="number" value={data.age} onChange={e => setData('age', e.target.value)} placeholder="Usia Anda" className="w-full max-w-sm px-4 py-3 rounded-lg text-center bg-gray-200 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:outline-none" required />
                            {errors.age && <p className="text-red-400 text-sm -mt-3">{errors.age}</p>}
                            <select value={data.status} onChange={e => setData('status', e.target.value)} className="w-full max-w-sm px-4 py-3 rounded-lg text-center bg-gray-200 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:outline-none" required >
                                <option value="" disabled>Pilih Status Anda</option>
                                <option value="Orang Tua">Orang Tua</option>
                                <option value="Pelaku UMKM">Pelaku UMKM</option>
                                <option value="Pelajar/Mahasiswa">Pelajar/Mahasiswa</option>
                                <option value="Umum">Umum</option>
                            </select>
                            {errors.status && <p className="text-red-400 text-sm -mt-3">{errors.status}</p>}
                            <textarea value={data.comment} onChange={e => setData('comment', e.target.value)} placeholder="Tulis komentar/masukan Anda..." className="w-full max-w-sm px-4 py-3 rounded-lg text-center bg-gray-200 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-amber-400 focus:outline-none" rows="3" required ></textarea>
                            {errors.comment && <p className="text-red-400 text-sm -mt-3">{errors.comment}</p>}
                            <button type="submit" disabled={isLoading} className="px-8 py-3 bg-amber-400 text-blue-900 font-bold rounded-full shadow-lg hover:bg-amber-500 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                Unduh Sertifikat PDF
                            </button>
                        </form>
                        {pdfError && <p className="text-red-400 mt-4 text-sm">{pdfError}</p>}
                    </div>
                )}
                {/* Loading state */}
                {isLoading && (
                    <div className="flex flex-col items-center justify-center">
                        <div className="loader"></div>
                        <p className="text-white mt-4">{processing ? 'Menyimpan data...' : 'Membuat sertifikat...'}</p>
                    </div>
                )}
                {/* Success state */}
                {isSuccess && (
                    <div className="flex flex-col items-center justify-center">
                        <svg className="w-16 h-16 text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h2 className="text-2xl font-bold text-white drop-shadow-sm">Terima Kasih!</h2>
                        <p className="text-gray-300 mt-2">Sertifikat Anda telah berhasil diunduh.</p>
                        {/* Tombol-tombol navigasi telah dihapus dari sini */}
                    </div>
                )}
            </div>
        </div>
    );
}