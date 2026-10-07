<?php

use App\Models\Message;
use App\Models\User;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

it('un visitante puede enviar un mensaje de contacto', function () {
    $this->post('/messages', [
        'name' => 'Juan',
        'email' => 'juan@example.com',
        'message' => 'Hola, quiero contactarte por un proyecto.',
    ])->assertOk();

    $this->assertDatabaseHas('messages', [
        'email' => 'juan@example.com',
        'is_read' => false,
    ]);
});

it('valida los campos del mensaje', function () {
    $this->post('/messages', [
        'name' => '',
        'email' => 'no-es-email',
        'message' => '',
    ])->assertSessionHasErrors(['name', 'email', 'message']);
});

it('un invitado no puede ver la bandeja de mensajes', function () {
    $this->get('/dashboard/messages')->assertRedirect('/login');
});

it('un usuario autenticado ve la bandeja ordenada por fecha', function () {
    $user = User::factory()->create();
    Message::factory()->create(['message' => 'Primero', 'is_read' => false]);
    Message::factory()->create(['message' => 'Nuevo', 'is_read' => false]);

    $this->actingAs($user)->get('/dashboard/messages')
        ->assertOk()
        ->assertSee('Nuevo')
        ->assertSee('Primero');
});

it('al ver un mensaje se marca como leído', function () {
    $user = User::factory()->create();
    $message = Message::factory()->create(['is_read' => false]);

    $this->actingAs($user)->get("/dashboard/messages/{$message->id}")->assertOk();

    expect($message->fresh()->is_read)->toBeTrue();
});