<?php

namespace App\Http\Requests\Post;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'slug' => 'required|string|regex:/^[a-z0-9_\-]+$/i|unique:posts,slug',
            'author' => 'required|string|max:255',
            'summary' => 'required|string|max:500',
            'meta_description' => 'nullable|string|max:255',
            'featured_image' => 'nullable|image|mimes:jpeg,png,webp,avif|max:2048',
        ];
    }
}