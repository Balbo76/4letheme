<?php

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style( 'style-name', get_stylesheet_uri() );
    //wp_enqueue_script( 'script-name', get_template_directory_uri() . '/js/example.js', array(), '1.0.0', true );
} );

add_action( 'admin_enqueue_scripts', function (){
    wp_enqueue_style( 'style-name', get_stylesheet_uri() );
});

add_filter('wp_theme_json_data_default', function ($json){
    //error_log('wp_theme_json_data_default');
    return $json;
});

add_filter('wp_theme_json_data_blocks', function ($json){
    //error_log('wp_theme_json_data_blocks');
    return $json;
});

add_filter('wp_theme_json_data_theme', function ($json){
    //error_log('wp_theme_json_data_theme');
    return $json;
});

add_filter('wp_theme_json_data_user', function ($json){
    //error_log('wp_theme_json_data_user');
    return $json;
});