@extends('app')

@section('content')
<div class="container mx-auto max-w-md mt-10">
    <h1 class="text-2xl font-bold mb-4">Toma de Asistencia</h1>
    @if(session('success'))
        <div class="bg-green-100 text-green-800 p-2 mb-4 rounded">{{ session('success') }}</div>
    @endif
    @php
        $googleUser = session('google_user');
    @endphp
    @if(Auth::check() || $googleUser)
        <form method="POST" action="{{ route('attendance.submit') }}">
            @csrf
            <div class="mb-4">
                <label for="subject" class="block mb-2">Materia:</label>
                <select name="subject" id="subject" class="w-full border rounded p-2" required>
                    <option value="">Seleccione una materia</option>
                    @foreach($subjects as $subject)
                        <option value="{{ $subject }}">{{ $subject }}</option>
                    @endforeach
                </select>
            </div>
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Registrar Asistencia</button>
        </form>
        <div class="mt-4 text-gray-600">
            Registrado como:
            @if($googleUser)
                <strong>{{ $googleUser['name'] }} ({{ $googleUser['email'] }})</strong>
            @else
                <strong>{{ Auth::user()->name }} ({{ Auth::user()->email }})</strong>
            @endif
        </div>
    @else
        <a href="{{ route('google.login') }}" class="bg-red-600 text-white px-4 py-2 rounded">Ingresar con Google</a>
    @endif
</div>
@endsection
