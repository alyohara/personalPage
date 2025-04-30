<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToPostsTable extends Migration
{
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->string('slug')->unique();
            $table->text('summary')->nullable();
            $table->timestamp('published_at')->nullable();
            $table->string('author')->nullable();
            $table->string('featured_image')->nullable();
            $table->string('meta_description')->nullable();

        });
    }

    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropColumn(['slug', 'summary', 'published_at', 'author', 'featured_image', 'meta_description']);
        });
    }
}
