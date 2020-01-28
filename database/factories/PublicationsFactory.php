<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Publication;
use App\Category;
use Faker\Generator as Faker;

$factory->define(Publication::class, function (Faker $faker) {
    return [
        'title' => $faker->text(30),
        'author'  => $faker->text(20),
        'type' => $faker->randomElement(['article' ,'report', 'book']),
        'publication' => $faker->text(300),
        'categoryId' => Category::all()->random()->id
    ];
});
