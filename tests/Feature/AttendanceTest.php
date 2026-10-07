<?php

use App\Models\Attendance;
use App\Models\User;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

it('permite a cualquier visitante ver el formulario de asistencia', function () {
    $this->get('/attendance')->assertOk();
});

it('valida que la materia sea requerida y correcta', function () {
    $this->post('/attendance', ['subject' => ''])->assertSessionHasErrors('subject');
    $this->post('/attendance', ['subject' => 'FISICA'])->assertSessionHasErrors('subject');
});

it('registra asistencia de un visitante sin email', function () {
    $this->post('/attendance', ['subject' => 'AyED'])
        ->assertSessionHas('success');

    $this->assertDatabaseCount('attendances', 1);
    $this->assertDatabaseHas('attendances', [
        'name' => 'Invitado',
        'subject' => 'AyED',
    ]);
});

it('usa el email del flujo de Google para el registro', function () {
    session(['google_user' => ['name' => 'Pepe', 'email' => 'pepe@unab.edu.ar']]);

    $this->post('/attendance', ['subject' => 'ED'])->assertSessionHas('success');

    $this->assertDatabaseHas('attendances', [
        'name' => 'Pepe',
        'email' => 'pepe@unab.edu.ar',
        'subject' => 'ED',
    ]);
});

it('usa los datos del usuario autenticado', function () {
    $user = User::factory()->create(['name' => 'Docente', 'email' => 'docente@unab.edu.ar']);

    $this->actingAs($user)
        ->post('/attendance', ['subject' => 'PC'])
        ->assertSessionHas('success');

    $this->assertDatabaseHas('attendances', [
        'name' => 'Docente',
        'email' => 'docente@unab.edu.ar',
        'subject' => 'PC',
    ]);
});

it('evita duplicar la asistencia de la misma materia el mismo día', function () {
    $this->post('/attendance', ['subject' => 'AyED'])->assertSessionHas('success');
    $this->post('/attendance', ['subject' => 'AyED'])->assertSessionHasErrors('subject');

    $this->assertDatabaseCount('attendances', 1);
});

it('permite registrar otra materia el mismo día', function () {
    $this->post('/attendance', ['subject' => 'AyED']);
    $this->post('/attendance', ['subject' => 'ED'])->assertSessionHas('success');

    $this->assertDatabaseCount('attendances', 2);
});

it('genera el CSV respetando los filtros', function () {
    Attendance::factory()->create(['subject' => 'AyED', 'attended_at' => now()]);
    Attendance::factory()->create(['subject' => 'PC', 'attended_at' => now()]);

    $user = User::factory()->create();

    $response = $this->actingAs($user)->get('/dashboard/attendances/export?subject=AyED');

    $response->assertOk();
    $content = $response->streamedContent();
    expect($content)->toContain('AyED');
    expect($content)->not->toContain('"PC"');
});