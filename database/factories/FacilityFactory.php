<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Facility>
 */
class FacilityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $facilities = [
            ['name' => 'Perpustakaan', 'icon' => 'book-open'],
            ['name' => 'Laboratorium Komputer', 'icon' => 'computer-desktop'],
            ['name' => 'Laboratorium Bahasa', 'icon' => 'language'],
            ['name' => 'Laboratorium IPA', 'icon' => 'beaker'],
            ['name' => 'Ruang Multimedia', 'icon' => 'tv'],
            ['name' => 'Aula Sekolah', 'icon' => 'building-office'],
            ['name' => 'Lapangan Olahraga', 'icon' => 'trophy'],
            ['name' => 'Kantin Sekolah', 'icon' => 'home'],
            ['name' => 'Masjid', 'icon' => 'building-library'],
            ['name' => 'UKS', 'icon' => 'heart'],
        ];
        
        $facility = fake()->randomElement($facilities);
        
        return [
            'name' => $facility['name'],
            'description' => fake()->paragraph(random_int(2, 4)),
            'image' => null,
            'icon' => $facility['icon'],
            'is_active' => fake()->boolean(95), // 95% chance of being active
            'sort_order' => fake()->numberBetween(0, 100),
        ];
    }

    /**
     * Indicate that the facility is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }
}