<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\PpdbController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\NewsController as AdminNewsController;
use App\Http\Controllers\Admin\PpdbController as AdminPpdbController;
use App\Http\Controllers\Admin\FeedbackController as AdminFeedbackController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Public routes
Route::get('/', [HomeController::class, 'index'])->name('home');

// News routes
Route::controller(NewsController::class)->group(function () {
    Route::get('/berita', 'index')->name('news.index');
    Route::get('/berita/{news:slug}', 'show')->name('news.show');
});

// Gallery routes
Route::controller(GalleryController::class)->group(function () {
    Route::get('/galeri', 'index')->name('gallery.index');
    Route::get('/galeri/{gallery}', 'show')->name('gallery.show');
});

// PPDB routes
Route::controller(PpdbController::class)->group(function () {
    Route::get('/ppdb', 'index')->name('ppdb.index');
    Route::post('/ppdb', 'store')->name('ppdb.store');
});

// Feedback routes
Route::controller(FeedbackController::class)->group(function () {
    Route::get('/saran', 'index')->name('feedback.index');
    Route::post('/saran', 'store')->name('feedback.store');
});

// Static pages
Route::get('/profil', function () {
    return Inertia::render('profile/index');
})->name('profile.index');

Route::get('/akademik', function () {
    return Inertia::render('academic/index');
})->name('academic.index');

Route::get('/ekstrakurikuler', function () {
    return Inertia::render('extracurricular/index');
})->name('extracurricular.index');

Route::get('/fasilitas', function () {
    return Inertia::render('facilities/index');
})->name('facilities.index');

Route::get('/kontak', function () {
    return Inertia::render('contact/index');
})->name('contact.index');

// Auth dashboard
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    // Admin routes
    Route::prefix('admin')->name('admin.')->group(function () {
        // News management
        Route::resource('news', AdminNewsController::class);
        
        // PPDB management
        Route::controller(AdminPpdbController::class)->group(function () {
            Route::get('ppdb', 'index')->name('ppdb.index');
            Route::get('ppdb/{ppdb}', 'show')->name('ppdb.show');
            Route::patch('ppdb/{ppdb}', 'update')->name('ppdb.update');
            Route::delete('ppdb/{ppdb}', 'destroy')->name('ppdb.destroy');
        });
        
        // Feedback management
        Route::controller(AdminFeedbackController::class)->group(function () {
            Route::get('feedback', 'index')->name('feedback.index');
            Route::get('feedback/{feedback}', 'show')->name('feedback.show');
            Route::patch('feedback/{feedback}', 'update')->name('feedback.update');
            Route::delete('feedback/{feedback}', 'destroy')->name('feedback.destroy');
        });
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
