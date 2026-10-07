<?php

use Laravel\Socialite\Facades\Socialite;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

it('el callback de Google crea al usuario y guarda su identidad en sesión', function () {
    Socialite::fake([
        'google' => Socialite::user([
            'id' => 'google-id-123',
            'name' => 'Alumno Test',
            'email' => 'alumno@unab.edu.ar',
        ]),
    ]);

    $response = $this->get('/auth/google/callback');

    $response->assertRedirect(route('attendance.form'));
    $this->assertDatabaseHas('users', ['email' => 'alumno@unab.edu.ar']);
    expect(session('google_user'))->toEqual([
        'email' => 'alumno@unab.edu.ar',
        'name' => 'Alumno Test',
    ]);
});

it('no duplica usuarios con el mismo email de Google', function () {
    Socialite::fake([
        'google' => Socialite::user([
            'id' => 'google-id-456',
            'name' => 'Repetido',
            'email' => 'repetido@unab.edu.ar',
        ]),
    ]);

    $this->get('/auth/google/callback');
    $this->get('/auth/google/callback');

    $this->assertDatabaseCount('users', 1);
});

it('el endpoint de deploy legacy ya no existe', function () {
    $this->get('/deploy')->assertNotFound();
});