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
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

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
