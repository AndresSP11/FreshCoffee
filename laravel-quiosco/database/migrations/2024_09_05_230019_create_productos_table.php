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
        Schema::create('productos', function (Blueprint $table) {
            /* Reordar que la parte de las tablas la considera en mayuscula pero cuando se quiere hacer referencia al id se obtiene ello */
            $table->id();
            $table->string('nombre');
            $table->double('precio');
            $table->string('imagen');
            /* Productos con 1 significa disponible , productos en 0 signifia uqe ya no estan disponibles. */
            $table->boolean('disponible')->default(1);
            $table->foreignId('categoria_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};
