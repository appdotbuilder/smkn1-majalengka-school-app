<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Extracurricular>
 */
class ExtracurricularFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $extracurriculars = [
            ['name' => 'Basket', 'category' => 'olahraga'],
            ['name' => 'Sepak Bola', 'category' => 'olahraga'],
            ['name' => 'Badminton', 'category' => 'olahraga'],
            ['name' => 'Voli', 'category' => 'olahraga'],
            ['name' => 'Paduan Suara', 'category' => 'seni'],
            ['name' => 'Tari Tradisional', 'category' => 'seni'],
            ['name' => 'Teater', 'category' => 'seni'],
            ['name' => 'Robotika', 'category' => 'teknologi'],
            ['name' => 'Programming Club', 'category' => 'teknologi'],
            ['name' => 'English Club', 'category' => 'bahasa'],
            ['name' => 'Japanese Club', 'category' => 'bahasa'],
            ['name' => 'Rohis', 'category' => 'agama'],
            ['name' => 'PMR', 'category' => 'lainnya'],
            ['name' => 'Pramuka', 'category' => 'lainnya'],
        ];
        
        $extracurricular = fake()->randomElement($extracurriculars);
        $maxMembers = fake()->numberBetween(20, 50);
        $currentMembers = fake()->numberBetween(0, $maxMembers);
        
        return [
            'name' => $extracurricular['name'],
            'description' => fake()->paragraph(random_int(2, 4)),
            'image' => null,
            'coach' => fake()->name(),
            'schedule' => fake()->randomElement([
                'Senin 15:00-17:00',
                'Selasa 14:00-16:00', 
                'Rabu 15:30-17:30',
                'Kamis 14:00-16:00',
                'Jumat 13:00-15:00',
                'Sabtu 09:00-11:00'
            ]),
            'location' => fake()->randomElement([
                'Lapangan Sekolah',
                'Aula Sekolah',
                'Ruang Multimedia',
                'Lab Komputer',
                'Ruang Kelas',
                'Musholla'
            ]),
            'category' => $extracurricular['category'],
            'is_active' => fake()->boolean(90), // 90% chance of being active
            'max_members' => $maxMembers,
            'current_members' => $currentMembers,
        ];
    }

    /**
     * Indicate that the extracurricular is full.
     */
    public function full(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'current_members' => $attributes['max_members'],
            ];
        });
    }

    /**
     * Indicate that the extracurricular is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }
}