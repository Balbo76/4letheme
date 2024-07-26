<?php

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style( 'style-name', get_stylesheet_uri() );
    //wp_enqueue_script( 'script-name', get_template_directory_uri() . '/js/example.js', array(), '1.0.0', true );
} );

add_action( 'admin_enqueue_scripts', function (){
    wp_enqueue_style( 'style-name', get_stylesheet_uri() );
});


add_action('after_setup_theme', function (){
    add_filter('wp_theme_json_data_user', function ($theme_json){
        // hooks into the data provided by the user

        return $theme_json;
    });
});