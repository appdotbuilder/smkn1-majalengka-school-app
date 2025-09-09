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
        Schema::create('ppdb_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('nik', 16)->unique();
            $table->string('nisn', 10)->unique();
            $table->enum('gender', ['L', 'P']);
            $table->string('birth_place');
            $table->date('birth_date');
            $table->text('address');
            $table->string('phone', 15);
            $table->string('email')->unique();
            $table->string('school_origin');
            $table->decimal('final_score', 5, 2);
            $table->string('major_choice1');
            $table->string('major_choice2')->nullable();
            $table->string('father_name');
            $table->string('mother_name');
            $table->string('parent_phone', 15);
            $table->string('parent_occupation')->nullable();
            $table->enum('status', ['pending', 'verified', 'accepted', 'rejected'])->default('pending');
            $table->text('notes')->nullable();
            $table->timestamp('registered_at')->useCurrent();
            $table->timestamps();
            
            // Indexes for performance
            $table->index('status');
            $table->index('major_choice1');
            $table->index('final_score');
            $table->index('registered_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ppdb_registrations');
    }
};