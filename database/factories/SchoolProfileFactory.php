<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SchoolProfile>
 */
class SchoolProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'key' => fake()->unique()->slug(),
            'value' => fake()->paragraph(),
            'type' => fake()->randomElement(['text', 'html', 'json', 'image']),
            'description' => fake()->sentence(),
        ];
    }

    /**
     * Create a text type profile.
     */
    public function text(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'text',
            'value' => fake()->sentence(),
        ]);
    }

    /**
     * Create an HTML type profile.
     */
    public function html(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'html',
            'value' => '<p>' . fake()->paragraph() . '</p>',
        ]);
    }

    /**
     * Create a JSON type profile.
     */
    public function json(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'json',
            'value' => json_encode([
                'title' => fake()->sentence(),
                'content' => fake()->paragraph(),
            ]),
        ]);
    }
}