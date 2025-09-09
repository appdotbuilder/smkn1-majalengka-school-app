<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePpdbRegistrationRequest;
use App\Models\PpdbRegistration;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PpdbController extends Controller
{
    /**
     * Display the PPDB registration form.
     */
    public function index()
    {
        return Inertia::render('ppdb/index', [
            'majors' => [
                'Teknik Komputer dan Jaringan' => 'Teknik Komputer dan Jaringan (TKJ)',
                'Rekayasa Perangkat Lunak' => 'Rekayasa Perangkat Lunak (RPL)',
                'Multimedia' => 'Multimedia (MM)',
                'Teknik Kendaraan Ringan' => 'Teknik Kendaraan Ringan (TKR)',
                'Teknik Sepeda Motor' => 'Teknik Sepeda Motor (TSM)',
                'Akuntansi' => 'Akuntansi (AKL)',
                'Administrasi Perkantoran' => 'Administrasi Perkantoran (AP)',
                'Pemasaran' => 'Pemasaran (PM)',
            ],
        ]);
    }

    /**
     * Store a newly created PPDB registration.
     */
    public function store(StorePpdbRegistrationRequest $request)
    {
        $validated = $request->validated();
        $validated['registered_at'] = now();
        
        $registration = PpdbRegistration::create($validated);

        return redirect()->route('ppdb.index')
            ->with('success', 'Pendaftaran PPDB berhasil dikirim dengan ID: ' . $registration->id);
    }
}