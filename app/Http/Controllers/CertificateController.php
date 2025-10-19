<?php

namespace App\Http\Controllers;

use App\Models\Certificate; // Pastikan model Certificate sudah dibuat
use Illuminate\Http\Request;
use Inertia\Inertia;

class CertificateController extends Controller
{
    /**
     * Menyimpan data sertifikat baru dari form.
     */
    public function store(Request $request)
    {
        // Validasi data yang masuk dari form
        $validatedData = $request->validate([
            'name'    => 'required|string|max:255',
            'age'     => 'required|integer|min:1',
            'status'  => 'required|string',
            'comment' => 'required|string',
        ]);

        // Simpan data ke dalam database
        Certificate::create($validatedData);

        // Berikan respons redirect kembali ke halaman asal.
        // Ini adalah respons yang valid dan diharapkan oleh Inertia.js.
        return redirect()->back();
    }

    /**
     * Menampilkan halaman database partisipan (hanya untuk admin).
     */
    public function database()
    {
        // Ambil semua data sertifikat dari database, diurutkan dari yang terbaru
        $certificates = Certificate::latest()->get();

        // Tampilkan halaman 'Database.jsx' dan kirimkan data sertifikat ke sana
        return Inertia::render('Book/Pages/Database', [
            'certificates' => $certificates,
        ]);
    }
}