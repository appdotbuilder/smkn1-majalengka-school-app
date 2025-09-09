<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PpdbRegistration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PpdbController extends Controller
{
    /**
     * Display a listing of PPDB registrations.
     */
    public function index(Request $request)
    {
        $query = PpdbRegistration::query();
        
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }
        
        if ($request->filled('major')) {
            $query->where('major_choice1', $request->major);
        }
        
        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('full_name', 'like', '%' . $request->search . '%')
                  ->orWhere('email', 'like', '%' . $request->search . '%')
                  ->orWhere('nik', 'like', '%' . $request->search . '%')
                  ->orWhere('nisn', 'like', '%' . $request->search . '%');
            });
        }

        $registrations = $query->latest('registered_at')
                              ->paginate(20);

        $stats = [
            'total' => PpdbRegistration::count(),
            'pending' => PpdbRegistration::where('status', 'pending')->count(),
            'verified' => PpdbRegistration::where('status', 'verified')->count(),
            'accepted' => PpdbRegistration::where('status', 'accepted')->count(),
            'rejected' => PpdbRegistration::where('status', 'rejected')->count(),
        ];

        return Inertia::render('admin/ppdb/index', [
            'registrations' => $registrations,
            'stats' => $stats,
            'filters' => $request->only(['status', 'major', 'search']),
            'majors' => [
                'Teknik Komputer dan Jaringan',
                'Rekayasa Perangkat Lunak',
                'Multimedia',
                'Teknik Kendaraan Ringan',
                'Teknik Sepeda Motor',
                'Akuntansi',
                'Administrasi Perkantoran',
                'Pemasaran',
            ],
        ]);
    }

    /**
     * Display the specified registration.
     */
    public function show(PpdbRegistration $ppdb)
    {
        return Inertia::render('admin/ppdb/show', [
            'registration' => $ppdb,
        ]);
    }

    /**
     * Update the registration status.
     */
    public function update(Request $request, PpdbRegistration $ppdb)
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,verified,accepted,rejected',
            'notes' => 'nullable|string|max:1000',
        ]);

        $ppdb->update($validated);

        return redirect()->route('admin.ppdb.show', $ppdb)
            ->with('success', 'Status pendaftaran berhasil diperbarui.');
    }



    /**
     * Remove the specified registration.
     */
    public function destroy(PpdbRegistration $ppdb)
    {
        $ppdb->delete();

        return redirect()->route('admin.ppdb.index')
            ->with('success', 'Data pendaftaran berhasil dihapus.');
    }
}