<?php

it('defaults to terminal theme when there is no cookie', function () {
    $this->get('/')
        ->assertOk()
        ->assertSee('class="dark terminal"', false)
        ->assertSee("const appearance = 'terminal';", false);
});

it('keeps the appearance stored in the cookie', function () {
    $this->withUnencryptedCookies(['appearance' => 'light'])
        ->get('/')
        ->assertOk()
        ->assertSee('class="light"', false)
        ->assertSee("const appearance = 'light';", false);
});

it('applies terminal together with dark', function () {
    $this->withUnencryptedCookies(['appearance' => 'terminal'])
        ->get('/')
        ->assertOk()
        ->assertSee('class="dark terminal"', false);
});
