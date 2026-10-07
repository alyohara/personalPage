<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(6),
            'slug' => fn (array $attributes) => Str::slug($attributes['title']).'-'.Str::random(4),
            'summary' => fake()->sentence(12),
            'content' => fake()->paragraphs(4, true),
            'is_published' => false,
            'published_at' => null,
            'author' => fake()->name(),
            'featured_image' => null,
            'meta_description' => fake()->sentence(),
        ];
    }

    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_published' => true,
            'published_at' => now(),
        ]);
    }
}