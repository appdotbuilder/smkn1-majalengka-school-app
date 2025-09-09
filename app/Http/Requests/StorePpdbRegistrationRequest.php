<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePpdbRegistrationRequest extends FormRequest
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
            'full_name' => 'required|string|max:255',
            'nik' => 'required|string|size:16|unique:ppdb_registrations,nik',
            'nisn' => 'required|string|size:10|unique:ppdb_registrations,nisn',
            'gender' => 'required|in:L,P',
            'birth_place' => 'required|string|max:100',
            'birth_date' => 'required|date|before:today',
            'address' => 'required|string',
            'phone' => 'required|string|max:15',
            'email' => 'required|email|unique:ppdb_registrations,email',
            'school_origin' => 'required|string|max:255',
            'final_score' => 'required|numeric|min:0|max:100',
            'major_choice1' => 'required|string|max:255',
            'major_choice2' => 'nullable|string|max:255|different:major_choice1',
            'father_name' => 'required|string|max:255',
            'mother_name' => 'required|string|max:255',
            'parent_phone' => 'required|string|max:15',
            'parent_occupation' => 'nullable|string|max:255',
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
            'full_name.required' => 'Nama lengkap wajib diisi.',
            'nik.required' => 'NIK wajib diisi.',
            'nik.size' => 'NIK harus terdiri dari 16 digit.',
            'nik.unique' => 'NIK sudah terdaftar.',
            'nisn.required' => 'NISN wajib diisi.',
            'nisn.size' => 'NISN harus terdiri dari 10 digit.',
            'nisn.unique' => 'NISN sudah terdaftar.',
            'gender.required' => 'Jenis kelamin wajib dipilih.',
            'birth_place.required' => 'Tempat lahir wajib diisi.',
            'birth_date.required' => 'Tanggal lahir wajib diisi.',
            'birth_date.before' => 'Tanggal lahir tidak valid.',
            'address.required' => 'Alamat wajib diisi.',
            'phone.required' => 'Nomor telepon wajib diisi.',
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Format email tidak valid.',
            'email.unique' => 'Email sudah terdaftar.',
            'school_origin.required' => 'Asal sekolah wajib diisi.',
            'final_score.required' => 'Nilai akhir wajib diisi.',
            'final_score.numeric' => 'Nilai akhir harus berupa angka.',
            'final_score.min' => 'Nilai akhir minimal 0.',
            'final_score.max' => 'Nilai akhir maksimal 100.',
            'major_choice1.required' => 'Pilihan jurusan pertama wajib dipilih.',
            'major_choice2.different' => 'Pilihan jurusan kedua harus berbeda dengan pilihan pertama.',
            'father_name.required' => 'Nama ayah wajib diisi.',
            'mother_name.required' => 'Nama ibu wajib diisi.',
            'parent_phone.required' => 'Nomor telepon orang tua wajib diisi.',
        ];
    }
}