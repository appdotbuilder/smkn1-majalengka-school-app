<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateNewsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'excerpt' => 'required|string|max:500',
            'content' => 'required|string',
            'image' => 'nullable|string|max:255',
            'category' => 'required|in:berita,pengumuman,prestasi,kegiatan',
            'is_featured' => 'boolean',
            'is_published' => 'boolean',
            'published_at' => 'nullable|date',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'title.required' => 'Judul berita wajib diisi.',
            'title.max' => 'Judul berita maksimal 255 karakter.',
            'excerpt.required' => 'Ringkasan berita wajib diisi.',
            'excerpt.max' => 'Ringkasan berita maksimal 500 karakter.',
            'content.required' => 'Konten berita wajib diisi.',
            'category.required' => 'Kategori berita wajib dipilih.',
            'category.in' => 'Kategori yang dipilih tidak valid.',
        ];
    }
}