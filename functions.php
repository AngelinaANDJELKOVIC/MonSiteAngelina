<?php

function capitaine_register_assets()
{
    // Déclarer le JS
    wp_enqueue_script(
        'capitainejs',
        get_template_directory_uri() . '/script/script.js',
        array('jquery'),
        '1.0',
        true
    );
    // Déclarer le fichier style.css à la racine du thème
    //wp_enqueue_style(  'capitaine',  get_stylesheet_uri(),  array(),  '1.0');
    // Déclarer le fichier CSS à un autre emplacement
    wp_enqueue_style('capitainecss',  get_template_directory_uri() . '/style.css', array(), '1.0');
}

function ANDANG_supports()
{
    add_theme_support('title-tag');
}
add_action('wp_enqueue_scripts', 'capitaine_register_assets');

// Ajouter la prise en charge des images mises en avant
add_theme_support('post-thumbnails');

// Ajouter automatiquement le titre du site dans l'en-tête du site
add_theme_support('title-tag');

function register_my_menu()
{
    register_nav_menu('main-menu', 'Menu principal');
}
add_action('after_setup_theme', 'register_my_menu');


// Menu de navigation spécial
register_nav_menus(array(
    'entete' => 'entete'
));

// Menu de navigation footer
register_nav_menus(array(
    'footer' => 'footer'
));

/*APPEL BOOTSTRAP*/
function ANDANG_register_assets()
{
    wp_register_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css', []);
    wp_register_script('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js', ['popper'], [], false, true);
    wp_register_script('popper', 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js', [], false, true);
    wp_enqueue_style('bootstrap');
    wp_enqueue_script('bootstrap');
}

add_action('after_setup_theme', 'ANDANG_supports');
/*BOOTSTRAP*/
add_action('wp_enqueue_scripts', 'ANDANG_register_assets');
