<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreGalleryRequest extends FormRequest
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
            'description' => 'nullable|string',
            'image' => 'required|string|max:255',
            'type' => 'required|in:image,video',
            'category' => 'required|string|max:100',
            'is_featured' => 'boolean',
            'sort_order' => 'integer|min:0',
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
            'title.required' => 'Judul galeri wajib diisi.',
            'title.max' => 'Judul galeri maksimal 255 karakter.',
            'image.required' => 'File gambar wajib diunggah.',
            'type.required' => 'Tipe media wajib dipilih.',
            'type.in' => 'Tipe media yang dipilih tidak valid.',
            'category.required' => 'Kategori wajib diisi.',
        ];
    }
}