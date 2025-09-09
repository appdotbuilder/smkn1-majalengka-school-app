<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Feedback>
 */
class FeedbackFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = ['saran', 'kritik', 'pengaduan', 'pertanyaan', 'lainnya'];
        $subjects = [
            'Fasilitas Sekolah',
            'Kualitas Pembelajaran', 
            'Ekstrakurikuler',
            'Administrasi Sekolah',
            'Kebersihan Lingkungan',
            'Pelayanan Guru',
            'Kegiatan Sekolah'
        ];
        
        return [
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'phone' => fake()->optional()->phoneNumber(),
            'subject' => fake()->randomElement($subjects),
            'message' => fake()->paragraph(random_int(3, 6)),
            'type' => fake()->randomElement($types),
            'status' => fake()->randomElement(['unread', 'read', 'replied']),
            'reply' => fake()->optional(30)->paragraph(2), // 30% chance of having a reply
            'replied_at' => fake()->optional(30)->dateTimeBetween('-30 days', 'now'),
            'replied_by' => fake()->optional(30)->randomElement(User::pluck('id')->toArray() ?: [1]),
        ];
    }

    /**
     * Indicate that the feedback has been replied.
     */
    public function replied(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'replied',
            'reply' => fake()->paragraph(2),
            'replied_at' => fake()->dateTimeBetween('-7 days', 'now'),
            'replied_by' => User::factory(),
        ]);
    }

    /**
     * Indicate that the feedback is unread.
     */
    public function unread(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'unread',
            'reply' => null,
            'replied_at' => null,
            'replied_by' => null,
        ]);
    }
}