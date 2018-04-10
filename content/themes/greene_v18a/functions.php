<?php
/** 
 * Functions
 *
 * Smart functions
 *
 * @link https://github.com/sdco-partners/Init
 *
 * @package Wordpress
 * @subpackage Functions
 * @since 1.0
 * @version 1.0
 */


  /* Add Styles, Fonts, and Javascript */
  function my_enqueue_style() {
    $_DIR = get_template_directory_uri();

    wp_enqueue_style('styles-min', $_DIR.'/prod/styles.css');
    wp_enqueue_script('scripts-min', $_DIR.'/prod/scripts.js', array(), '1.0.0', true);
  }
  add_action( 'wp_enqueue_scripts', 'my_enqueue_style' );


  /* Remove Admin Login */
  function remove_admin_login_header() {
    remove_action('wp_head', '_admin_bar_bump_cb');
  }
  add_action('get_header', 'remove_admin_login_header');


  /* remove auto paragraph tag from the-content */
  remove_filter('the_content', 'wpautop');

  
  /**
  * isMobile
  *
  * returns true/false if there is a match for browser. 
  */
  function isMobile() {
    return preg_match("/(android|webos|avantgo|iphone|ipad|ipod|blackbe‌​rry|iemobile|bolt|bo‌​ost|cricket|docomo|f‌​one|hiptop|mini|oper‌​a mini|kitkat|mobi|palm|phone|pie|tablet|up\.browser|up\.link|‌​webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
  }

  
  /**
  *
  * test
  *
  * shortcut to test function
  */
  function test($var, $mes){
    echo "<script>console.log('".$var.", outputs ".$mes."');</script>";
  }


  /**
  *
  * Adds option tab
  *
  */
  if( function_exists('acf_add_options_page') ) {
    
    acf_add_options_page();
    
  }


  /**
  *
  * Disables Theme Editor
  *
  */
  function remove_editor_menu() {
    remove_action('admin_menu', '_add_themes_utility_last', 101);
  }
  add_action('_admin_menu', 'remove_editor_menu', 1);


?>
