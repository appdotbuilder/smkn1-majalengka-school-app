<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('extracurriculars', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->string('image')->nullable();
            $table->string('coach')->nullable();
            $table->string('schedule')->nullable();
            $table->string('location')->nullable();
            $table->enum('category', ['olahraga', 'seni', 'teknologi', 'bahasa', 'agama', 'lainnya'])->default('lainnya');
            $table->boolean('is_active')->default(true);
            $table->integer('max_members')->default(30);
            $table->integer('current_members')->default(0);
            $table->timestamps();
            
            // Indexes for performance
            $table->index('category');
            $table->index('is_active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('extracurriculars');
    }
};