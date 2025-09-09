<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreNewsRequest;
use App\Http\Requests\UpdateNewsRequest;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = News::with('creator');
        
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }
        
        if ($request->filled('status')) {
            if ($request->status === 'published') {
                $query->where('is_published', true);
            } elseif ($request->status === 'draft') {
                $query->where('is_published', false);
            }
        }
        
        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('excerpt', 'like', '%' . $request->search . '%');
            });
        }

        $news = $query->latest()->paginate(15);

        return Inertia::render('admin/news/index', [
            'news' => $news,
            'filters' => $request->only(['category', 'status', 'search']),
            'categories' => [
                'berita' => 'Berita',
                'pengumuman' => 'Pengumuman',
                'prestasi' => 'Prestasi',
                'kegiatan' => 'Kegiatan',
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/news/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNewsRequest $request)
    {
        $validated = $request->validated();
        $validated['created_by'] = auth()->id();
        
        if (!isset($validated['published_at']) && $validated['is_published']) {
            $validated['published_at'] = now();
        }

        $news = News::create($validated);

        return redirect()->route('admin.news.show', $news)
            ->with('success', 'Berita berhasil dibuat.');
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        $news->load('creator');

        return Inertia::render('admin/news/show', [
            'news' => $news,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        return Inertia::render('admin/news/edit', [
            'news' => $news,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNewsRequest $request, News $news)
    {
        $validated = $request->validated();
        
        if (!isset($validated['published_at']) && $validated['is_published'] && !$news->is_published) {
            $validated['published_at'] = now();
        }

        $news->update($validated);

        return redirect()->route('admin.news.show', $news)
            ->with('success', 'Berita berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        $news->delete();

        return redirect()->route('admin.news.index')
            ->with('success', 'Berita berhasil dihapus.');
    }
}