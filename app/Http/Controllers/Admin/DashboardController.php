<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Gallery;
use App\Models\PpdbRegistration;
use App\Models\Feedback;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the admin dashboard.
     */
    public function index()
    {
        $stats = [
            'total_news' => News::count(),
            'published_news' => News::where('is_published', true)->count(),
            'total_gallery' => Gallery::count(),
            'ppdb_registrations' => PpdbRegistration::count(),
            'pending_ppdb' => PpdbRegistration::where('status', 'pending')->count(),
            'accepted_ppdb' => PpdbRegistration::where('status', 'accepted')->count(),
            'total_feedback' => Feedback::count(),
            'unread_feedback' => Feedback::where('status', 'unread')->count(),
        ];

        $recentNews = News::with('creator')
            ->latest()
            ->take(5)
            ->get();

        $recentPpdb = PpdbRegistration::latest('registered_at')
            ->take(5)
            ->get();

        $recentFeedback = Feedback::latest()
            ->take(5)
            ->get();

        return Inertia::render('admin/dashboard', [
            'stats' => $stats,
            'recent_news' => $recentNews,
            'recent_ppdb' => $recentPpdb,
            'recent_feedback' => $recentFeedback,
        ]);
    }
}