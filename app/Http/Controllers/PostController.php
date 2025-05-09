<?php

namespace App\Http\Controllers;

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

    public function indexPublic()
    {
        $posts = Post::where('is_published', true)
            ->orderBy('published_at', 'desc')
            ->paginate(10);

        return inertia('blog', [
            'posts' => $posts,
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

    public function update(Request $request, Post $post)
    {
        try {
            // Validate required fields first
            $request->validate([
                'title' => 'required|string|max:255',
                'content' => 'required|string',
                'slug' => 'required|string|unique:posts,slug,' . $post->id,
                'author' => 'required|string|max:255',
                'summary' => 'required|string|max:500',
            ]);

            // Then validate optional fields
            $validated = $request->validate([
                'featured_image' => 'nullable|image|max:2048',
                'meta_description' => 'nullable|string|max:255',
            ]);

            // Merge the validated data
            $validated = array_merge($request->only([
                'title',
                'content',
                'slug',
                'author',
                'summary'
            ]), $validated);

            if ($request->hasFile('featured_image')) {
                $path = $request->file('featured_image')->store('images', 'public');
                $validated['featured_image'] = $path;
            }

            $post->update($validated);

            return redirect()->route('posts.index')->with('success', 'Post actualizado correctamente.');
        } catch (\Exception $e) {
            \Log::error('Error updating post: ' . $e->getMessage());
            \Log::error('Stack trace: ' . $e->getTraceAsString());
            return back()->withErrors(['error' => 'Error al actualizar el post: ' . $e->getMessage()]);
        }
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'slug' => 'required|string|unique:posts,slug',
            'author' => 'required|string|max:255',
            'featured_image' => 'nullable|image|max:2048',
            'meta_description' => 'nullable|string|max:255',
            'summary' => 'required|string|max:500',
        ]);

        if ($request->hasFile('featured_image')) {
            $path = $request->file('featured_image')->store('images', 'public');
            $validated['featured_image'] = $path;
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
