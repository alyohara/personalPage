<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return Inertia::render('dashboard/posts', ['posts' => $posts]);
    }

    public function store(Request $request)
    {
        $$validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'slug' => 'required|string|unique:posts,slug',
            'published_at' => 'nullable|date',
            'author' => 'required|string|max:255',
            'featured_image' => 'nullable|image|max:2048',
            'meta_description' => 'nullable|string|max:255',
        ]);

        // Generar resumen con las primeras 100 palabras
        $validated['summary'] = implode(' ', array_slice(explode(' ', strip_tags($validated['content'])), 0, 100));

        if ($request->hasFile('featured_image')) {
            $validated['featured_image'] = $request->file('featured_image')->store('images');
        }

        Post::create($validated);

        return redirect()->route('posts.index')->with('success', 'Post guardado correctamente.');
    }

    public function create()
    {
        return Inertia::render('dashboard/post-create');
    }

    public function edit(Post $post)
    {
        return Inertia::render('dashboard/post-edit', ['post' => $post]);
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->route('posts.index')->with('success', 'Post eliminado correctamente.');
    }

    public function publish(Post $post)
    {
        $post->update(['is_published' => true]);

        return redirect()->route('posts.index')->with('success', 'Post publicado correctamente.');
    }

    public function update(Request $request, Post $post)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $post->update($validated);

        return redirect()->route('posts.index')->with('success', 'Post actualizado correctamente.');
    }

    public function indexPublic()
    {
        $posts = Post::where('status', 'published')
            ->orderBy('published_at', 'desc')
            ->get();

        return inertia('blog', [
            'posts' => $posts,
        ]);
    }
}
