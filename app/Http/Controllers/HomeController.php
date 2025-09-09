<?php

namespace App\Http\Controllers;

use App\Models\News;
use App\Models\Gallery;
use App\Models\Facility;
use App\Models\Extracurricular;
use App\Models\SchoolProfile;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        $featuredNews = News::published()
            ->featured()
            ->with('creator')
            ->latest('published_at')
            ->take(3)
            ->get();

        $latestNews = News::published()
            ->with('creator')
            ->latest('published_at')
            ->take(6)
            ->get();

        $featuredGallery = Gallery::where('is_featured', true)
            ->orderBy('sort_order')
            ->take(6)
            ->get();

        $facilities = Facility::active()
            ->orderBy('sort_order')
            ->take(8)
            ->get();

        $extracurriculars = Extracurricular::active()
            ->take(6)
            ->get();

        return Inertia::render('home', [
            'featured_news' => $featuredNews,
            'latest_news' => $latestNews,
            'featured_gallery' => $featuredGallery,
            'facilities' => $facilities,
            'extracurriculars' => $extracurriculars,
            'school_profile' => [
                'name' => SchoolProfile::getValue('school_name', 'SMKN 1 Majalengka'),
                'tagline' => SchoolProfile::getValue('school_tagline', 'Unggul dalam Prestasi, Prima dalam Karakter'),
                'vision' => SchoolProfile::getValue('school_vision', ''),
                'mission' => SchoolProfile::getValue('school_mission', ''),
            ],
        ]);
    }
}