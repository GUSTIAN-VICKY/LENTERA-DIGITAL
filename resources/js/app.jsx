import './bootstrap';
import '../css/app.css';
// import './firebaseConfig'; // Uncomment jika Anda menggunakan Firebase

// --- TAMBAHAN KODE UNTUK MEMPERBAIKI TINGGI LAYAR (VH) DI MOBILE ---
function setVhVariable() {
  // Ukur tinggi inner window (viewport sebenarnya)
  let vh = window.innerHeight * 0.01;
  // Set nilai ini sebagai variable CSS '--vh' di elemen root (html)
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Panggil saat pertama kali load
setVhVariable();
// Panggil lagi setiap kali ukuran window berubah (misal saat rotasi HP atau address bar hilang)
window.addEventListener('resize', setVhVariable);
window.addEventListener('orientationchange', setVhVariable);
// --- AKHIR KODE TAMBAHAN ---

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
