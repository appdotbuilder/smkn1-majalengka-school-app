<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Gallery>
 */
class GalleryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['kegiatan', 'prestasi', 'fasilitas', 'acara', 'pembelajaran'];
        
        return [
            'title' => fake()->sentence(random_int(3, 6), false),
            'description' => fake()->paragraph(1),
            'image' => 'gallery/placeholder-' . random_int(1, 10) . '.jpg',
            'type' => fake()->randomElement(['image', 'video']),
            'category' => fake()->randomElement($categories),
            'is_featured' => fake()->boolean(15), // 15% chance of being featured
            'sort_order' => fake()->numberBetween(0, 100),
            'created_by' => User::factory(),
        ];
    }

    /**
     * Indicate that the gallery item is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
            'sort_order' => 0,
        ]);
    }

    /**
     * Indicate that the gallery item is a video.
     */
    public function video(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'video',
        ]);
    }
}