<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BookController extends Controller
{
    /**
     * Menampilkan halaman utama buku interaktif.
     */
    public function show(): Response
    {
        // Ambil semua data partisipan, urutkan dari yang terbaru,
        // lalu kirimkan sebagai 'props' ke komponen React.
        $participants = Certificate::orderBy('created_at', 'desc')->get();

        return Inertia::render('Book/Show', [
            'participants' => $participants,
        ]);
    }

    /**
     * Menyimpan data sertifikat baru dari form.
     */
    public function store(Request $request)
    {
        // Validasi data yang masuk dari form React
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'age' => 'required|integer|min:1|max:150',
            'status' => 'required|string|in:Orang Tua,Pelaku UMKM,Pelajar/Mahasiswa,Umum',
            'comment' => 'required|string|min:5',
        ]);

        // Buat entri baru di database
        Certificate::create($validatedData);

        // Inertia akan secara otomatis me-refresh props di halaman sebelumnya
        return redirect()->back()->with('success', 'Data berhasil disimpan!');
    }
}
