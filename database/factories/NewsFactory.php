<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence(random_int(3, 8), false);
        $categories = ['berita', 'pengumuman', 'prestasi', 'kegiatan'];
        
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'excerpt' => fake()->paragraph(2),
            'content' => fake()->paragraphs(random_int(5, 10), true),
            'image' => null,
            'category' => fake()->randomElement($categories),
            'is_featured' => fake()->boolean(20), // 20% chance of being featured
            'is_published' => fake()->boolean(90), // 90% chance of being published
            'published_at' => fake()->dateTimeBetween('-30 days', '+7 days'),
            'created_by' => User::factory(),
        ];
    }

    /**
     * Indicate that the news is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }

    /**
     * Indicate that the news is unpublished.
     */
    public function unpublished(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_published' => false,
            'published_at' => null,
        ]);
    }
}