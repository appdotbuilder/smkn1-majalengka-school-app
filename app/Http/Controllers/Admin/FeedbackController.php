<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateFeedbackRequest;
use App\Models\Feedback;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeedbackController extends Controller
{
    /**
     * Display a listing of feedback.
     */
    public function index(Request $request)
    {
        $query = Feedback::with('replier');
        
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }
        
        if ($request->filled('type')) {
            $query->where('type', $request->type);
        }
        
        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%')
                  ->orWhere('email', 'like', '%' . $request->search . '%')
                  ->orWhere('subject', 'like', '%' . $request->search . '%');
            });
        }

        $feedback = $query->latest()->paginate(15);

        $stats = [
            'total' => Feedback::count(),
            'unread' => Feedback::where('status', 'unread')->count(),
            'read' => Feedback::where('status', 'read')->count(),
            'replied' => Feedback::where('status', 'replied')->count(),
        ];

        return Inertia::render('admin/feedback/index', [
            'feedback' => $feedback,
            'stats' => $stats,
            'filters' => $request->only(['status', 'type', 'search']),
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
     * Display the specified feedback.
     */
    public function show(Feedback $feedback)
    {
        $feedback->load('replier');
        
        // Mark as read if unread
        if ($feedback->status === 'unread') {
            $feedback->update(['status' => 'read']);
        }

        return Inertia::render('admin/feedback/show', [
            'feedback' => $feedback,
        ]);
    }

    /**
     * Update the specified feedback (reply).
     */
    public function update(UpdateFeedbackRequest $request, Feedback $feedback)
    {
        $validated = $request->validated();
        $validated['status'] = 'replied';
        $validated['replied_at'] = now();
        $validated['replied_by'] = auth()->id();

        $feedback->update($validated);

        return redirect()->route('admin.feedback.show', $feedback)
            ->with('success', 'Balasan berhasil dikirim.');
    }

    /**
     * Remove the specified feedback.
     */
    public function destroy(Feedback $feedback)
    {
        $feedback->delete();

        return redirect()->route('admin.feedback.index')
            ->with('success', 'Feedback berhasil dihapus.');
    }
}