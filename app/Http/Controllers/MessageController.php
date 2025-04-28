<?php

// app/Http/Controllers/MessageController.php
namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        Message::create($validated);

        return response()->json(['success' => true, 'message' => 'Message sent successfully!']);
    }

    public function index()
    {
        $messages = Message::paginate(10);
        return Inertia::render('dashboard/messages', [
            'messages' => $messages,
        ]);
    }

    public function toggleReadStatus($id)
    {
        $message = Message::findOrFail($id);
        $message->is_read = !$message->is_read;
        $message->save();

        return response()->json(['success' => true, 'is_read' => $message->is_read]);
    }

    public function show($id)
    {
        $message = Message::findOrFail($id);

        // Marcar el mensaje como leído
        if (!$message->is_read) {
            $message->is_read = true;
            $message->save();
        }

//        return inertia('MessageView', [
//            'message' => $message,
//        ]);
        return Inertia::render('dashboard/messages-view', [
            'message' => $message,
        ]);
    }
}
