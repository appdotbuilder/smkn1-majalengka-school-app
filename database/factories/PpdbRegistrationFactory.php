<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PpdbRegistration>
 */
class PpdbRegistrationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $majors = [
            'Teknik Komputer dan Jaringan',
            'Rekayasa Perangkat Lunak',
            'Multimedia',
            'Teknik Kendaraan Ringan',
            'Teknik Sepeda Motor',
            'Akuntansi',
            'Administrasi Perkantoran',
            'Pemasaran'
        ];
        
        $cities = [
            'Majalengka', 'Cirebon', 'Kuningan', 'Indramayu', 
            'Sumedang', 'Bandung', 'Jakarta', 'Bekasi'
        ];
        
        return [
            'full_name' => fake()->name(),
            'nik' => fake()->numerify('##############'),
            'nisn' => fake()->numerify('##########'),
            'gender' => fake()->randomElement(['L', 'P']),
            'birth_place' => fake()->randomElement($cities),
            'birth_date' => fake()->dateTimeBetween('-18 years', '-15 years'),
            'address' => fake()->address(),
            'phone' => fake()->phoneNumber(),
            'email' => fake()->unique()->safeEmail(),
            'school_origin' => 'SMP ' . fake()->company(),
            'final_score' => fake()->randomFloat(2, 70.00, 100.00),
            'major_choice1' => fake()->randomElement($majors),
            'major_choice2' => fake()->optional()->randomElement($majors),
            'father_name' => fake()->name('male'),
            'mother_name' => fake()->name('female'),
            'parent_phone' => fake()->phoneNumber(),
            'parent_occupation' => fake()->jobTitle(),
            'status' => fake()->randomElement(['pending', 'verified', 'accepted', 'rejected']),
            'notes' => fake()->optional()->paragraph(),
            'registered_at' => fake()->dateTimeBetween('-60 days', 'now'),
        ];
    }

    /**
     * Indicate that the registration is accepted.
     */
    public function accepted(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'accepted',
            'final_score' => fake()->randomFloat(2, 85.00, 100.00),
        ]);
    }

    /**
     * Indicate that the registration is rejected.
     */
    public function rejected(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'rejected',
            'notes' => 'Tidak memenuhi syarat minimum.',
        ]);
    }
}