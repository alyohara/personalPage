<?php

namespace App\Http\Controllers;

use App\Http\Requests\Post\StorePostRequest;
use App\Http\Requests\Post\UpdatePostRequest;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::orderBy('created_at', 'desc')->get();
        return Inertia::render('dashboard/posts', ['posts' => $posts]);
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

    public function indexPublic(Request $request)
    {
        $query = Post::where('is_published', true);

        // Handle search
        if ($request->has('search')) {
            $searchTerm = $request->get('search');
            $query->where(function($q) use ($searchTerm) {
                $q->where('title', 'like', "%{$searchTerm}%")
                  ->orWhere('summary', 'like', "%{$searchTerm}%")
                  ->orWhere('content', 'like', "%{$searchTerm}%");
            });
        }

        // Handle sorting
        $sortOrder = $request->get('sort', 'newest');
        $query->orderBy('published_at', $sortOrder === 'newest' ? 'desc' : 'asc');

        $posts = $query->paginate(10);

        return inertia('blog', [
            'posts' => $posts,
            'search' => $request->get('search', ''),
            'sort' => $sortOrder
        ]);
    }

    public function publish(Post $post)
    {
        $post->update([
            'is_published' => true,
            'published_at' => now()
        ]);
        return redirect()->back()->with('success', 'El post ha sido publicado.');
    }

    public function update(UpdatePostRequest $request, Post $post)
    {
        $validated = $request->validated();

        if ($request->hasFile('featured_image')) {
            $validated['featured_image'] = $request->file('featured_image')->store('images', 'public');
        }

        $post->update($validated);

        return redirect()->route('posts.index')->with('success', 'Post actualizado correctamente.');
    }

    public function store(StorePostRequest $request)
    {
        $validated = $request->validated();

        if ($request->hasFile('featured_image')) {
            $validated['featured_image'] = $request->file('featured_image')->store('images', 'public');
        }

        Post::create($validated);

        return redirect()->route('posts.index')->with('success', 'Post guardado correctamente.');
    }

    public function create()
    {
        return Inertia::render('dashboard/post-create');
    }

    public function unpublish(Post $post)
    {
        $post->update([
            'is_published' => false,
            'published_at' => null
        ]);
        return redirect()->back()->with('success', 'El post ha sido despublicado.');
    }

    public function show(Post $post)
    {
        if (!$post->is_published) {
            abort(404);
        }

        return inertia('blog/show', [
            'post' => $post
        ]);
    }
}
