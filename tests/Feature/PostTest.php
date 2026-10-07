<?php

use App\Models\Post;
use App\Models\User;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

it('el blog público solo muestra posts publicados', function () {
    Post::factory()->published()->create(['title' => 'Post visible']);
    Post::factory()->create(['title' => 'Borrador oculto']);

    $response = $this->get('/blog');

    $response->assertOk();
    $response->assertSee('Post visible');
    $response->assertDontSee('Borrador oculto');
});

it('un post no publicado devuelve 404', function () {
    $post = Post::factory()->create();

    $this->get("/blog/{$post->slug}")->assertNotFound();
});

it('un post publicado es visible por slug', function () {
    $post = Post::factory()->published()->create();

    $this->get("/blog/{$post->slug}")->assertOk()->assertSee($post->title);
});

it('un invitado no puede crear posts', function () {
    $this->post('/dashboard/posts', [
        'title' => 'Hack',
        'content' => 'x',
        'slug' => 'hack',
        'author' => 'attacker',
        'summary' => 'resumen',
    ])->assertRedirect('/login');
});

it('un usuario autenticado puede crear un post', function () {
    $user = User::factory()->create();

    $this->actingAs($user)->post('/dashboard/posts', [
        'title' => 'Mi primer post',
        'content' => '<p>Contenido</p>',
        'slug' => 'mi-primer-post',
        'author' => 'Bianco',
        'summary' => 'Un resumen corto',
        'meta_description' => 'desc',
    ])->assertRedirect(route('posts.index'));

    $this->assertDatabaseHas('posts', [
        'slug' => 'mi-primer-post',
        'is_published' => false,
    ]);
});

it('valida los campos obligatorios al crear un post', function () {
    $user = User::factory()->create();

    $this->actingAs($user)->post('/dashboard/posts', ['title' => ''])->assertSessionHasErrors([
        'title',
        'content',
        'slug',
        'author',
        'summary',
    ]);
});

it('un usuario puede actualizar un post', function () {
    $user = User::factory()->create();
    $post = Post::factory()->create(['slug' => 'viejo-slug']);

    $this->actingAs($user)
        ->put("/dashboard/posts/{$post->id}", $post->only('title', 'content', 'slug', 'author', 'summary') + [
            'title' => 'Título editado',
        ])
        ->assertRedirect(route('posts.index'));

    expect($post->fresh()->title)->toBe('Título editado');
});

it('publicar y despublicar un post funciona', function () {
    $user = User::factory()->create();
    $post = Post::factory()->create();

    $this->actingAs($user)->post("/dashboard/posts/{$post->id}/publish");
    expect($post->fresh()->is_published)->toBeTrue();

    $this->actingAs($user)->post("/dashboard/posts/{$post->id}/unpublish");
    expect($post->fresh()->is_published)->toBeFalse();
});

it('un usuario puede eliminar un post', function () {
    $user = User::factory()->create();
    $post = Post::factory()->create();

    $this->actingAs($user)->delete("/dashboard/posts/{$post->id}");

    $this->assertDatabaseMissing('posts', ['id' => $post->id]);
});