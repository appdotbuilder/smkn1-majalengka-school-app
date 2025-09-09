<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGalleryRequest;
use App\Http\Requests\UpdateGalleryRequest;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Gallery::with('creator');
        
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }
        
        if ($request->filled('type')) {
            $query->where('type', $request->type);
        }

        $galleries = $query->orderBy('sort_order')
                          ->orderBy('created_at', 'desc')
                          ->paginate(20);

        $featuredGalleries = Gallery::where('is_featured', true)
            ->orderBy('sort_order')
            ->take(8)
            ->get();

        return Inertia::render('gallery/index', [
            'galleries' => $galleries,
            'featured_galleries' => $featuredGalleries,
            'filters' => $request->only(['category', 'type']),
            'categories' => [
                'kegiatan' => 'Kegiatan',
                'prestasi' => 'Prestasi',
                'fasilitas' => 'Fasilitas',
                'acara' => 'Acara',
                'pembelajaran' => 'Pembelajaran',
            ],
            'types' => [
                'image' => 'Foto',
                'video' => 'Video',
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/gallery/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGalleryRequest $request)
    {
        $validated = $request->validated();
        $validated['created_by'] = auth()->id();

        $gallery = Gallery::create($validated);

        return redirect()->route('admin.gallery.index')
            ->with('success', 'Item galeri berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Gallery $gallery)
    {
        $gallery->load('creator');
        
        $relatedGalleries = Gallery::where('id', '!=', $gallery->id)
            ->where('category', $gallery->category)
            ->orderBy('sort_order')
            ->take(8)
            ->get();

        return Inertia::render('gallery/show', [
            'gallery' => $gallery,
            'related_galleries' => $relatedGalleries,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gallery $gallery)
    {
        return Inertia::render('admin/gallery/edit', [
            'gallery' => $gallery,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGalleryRequest $request, Gallery $gallery)
    {
        $gallery->update($request->validated());

        return redirect()->route('admin.gallery.index')
            ->with('success', 'Item galeri berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gallery $gallery)
    {
        $gallery->delete();

        return redirect()->route('admin.gallery.index')
            ->with('success', 'Item galeri berhasil dihapus.');
    }
}