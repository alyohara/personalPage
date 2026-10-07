<?php

use Inertia\Testing\AssertableInertia as Assert;

it('el idioma por defecto es ingles', function () {
    $this->get('/')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('welcome')->where('locale', 'en'));
});

it('se puede cambiar el idioma a espanol con la cookie', function () {
    $this->get('/locale/es')->assertRedirect('/');

    $this->withCookie('locale', 'es')
        ->get('/catedras')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('catedras')->where('locale', 'es'));
});

it('el atributo html lang sigue al idioma', function () {
    $this->withCookie('locale', 'es')->get('/')->assertSee('<html lang="es"', false);
});

it('rechaza idiomas no soportados', function () {
    $this->get('/locale/fr')->assertNotFound();
});
