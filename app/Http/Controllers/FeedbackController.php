<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFeedbackRequest;
use App\Models\Feedback;
use Inertia\Inertia;

class FeedbackController extends Controller
{
    /**
     * Display the feedback form.
     */
    public function index()
    {
        return Inertia::render('feedback/index', [
            'types' => [
                'saran' => 'Saran',
                'kritik' => 'Kritik',
                'pengaduan' => 'Pengaduan',
                'pertanyaan' => 'Pertanyaan',
                'lainnya' => 'Lainnya',
            ],
        ]);
    }

    /**
     * Store a newly created feedback.
     */
    public function store(StoreFeedbackRequest $request)
    {
        Feedback::create($request->validated());

        return redirect()->route('feedback.index')
            ->with('success', 'Terima kasih atas masukan Anda. Kami akan meresponnya dalam 1-2 hari kerja.');
    }
}