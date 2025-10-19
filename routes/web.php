<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\CertificateController; // Pastikan baris ini ada
use Illuminate\Support\Facades\Route;

// ...

Route::get('/', [BookController::class, 'show'])->name('book.show');
Route::post('/certificates', [CertificateController::class, 'store'])->name('certificate.store');

Route::middleware(['auth'])->group(function () {
    Route::get('/database', [CertificateController::class, 'database'])->name('certificate.database');
});

require __DIR__.'/auth.php';