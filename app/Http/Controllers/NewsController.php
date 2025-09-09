<?php

namespace App\Http\Controllers;

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
        
        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('excerpt', 'like', '%' . $request->search . '%');
            });
        }

        $news = $query->published()
                     ->latest('published_at')
                     ->paginate(12);

        $featuredNews = News::published()
            ->featured()
            ->latest('published_at')
            ->take(3)
            ->get();

        return Inertia::render('news/index', [
            'news' => $news,
            'featured_news' => $featuredNews,
            'filters' => $request->only(['category', 'search']),
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
        
        if (!isset($validated['published_at'])) {
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
        
        $relatedNews = News::published()
            ->where('id', '!=', $news->id)
            ->where('category', $news->category)
            ->latest('published_at')
            ->take(4)
            ->get();

        return Inertia::render('news/show', [
            'news' => $news,
            'related_news' => $relatedNews,
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
        $news->update($request->validated());

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