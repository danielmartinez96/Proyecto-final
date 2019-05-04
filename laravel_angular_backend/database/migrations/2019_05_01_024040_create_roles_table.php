<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre');
            $table->foreign('id_usuario')
            ->referencer('id')
            ->on('users')
            ->nullable()
            ->onDelete('set null');
            $table->foreign('id_proyecto')
            ->referencer('id')
            ->on('proyectos')
            ->nullable()
            ->onDelete('set null');
            $table->foreign('id_proyecto');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
}
