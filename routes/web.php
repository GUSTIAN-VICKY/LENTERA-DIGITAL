<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\CertificateController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia; // Pastikan ini ada
use App\Http\Controllers\ProfileController; // TAMBAHKAN INI

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', [BookController::class, 'show'])->name('book.show');
Route::post('/certificates', [CertificateController::class, 'store'])->name('certificate.store');


// --- RUTE YANG MEMERLUKAN LOGIN ---
Route::middleware(['auth'])->group(function () {
    
    Route::get('/database', [CertificateController::class, 'database'])->name('certificate.database');
    
    // --- TAMBAHKAN RUTE PROFIL YANG HILANG INI ---
    // Ini akan memperbaiki error Ziggy 'profile.edit'
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// Ini harus ada di paling bawah
require __DIR__.'/auth.php';
