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

$_DIR = get_template_directory_uri();

/* Add Styles, Fonts, and Javascript */
function my_enqueue_style() {
    $_DIR = get_template_directory_uri();

    wp_enqueue_style('fonts', 'https://cloud.typography.com/778678/7432172/css/fonts.css');
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


/**
*
* Prints Phone Number to Special Formatting
*
*/
function print_phone( $number, $splitter ) {
    $string = "";
    $is_one = ( $number[0] === '1' );
    $string .= $is_one ? mb_substr($number, 0, 4) : mb_substr($number, 0, 3);
    $string .= $splitter;
    $string .= $is_one ? mb_substr($number, 3, 3) : mb_substr($number, 2, 3);
    $string .= $splitter;
    $string .= $is_one ? mb_substr($number, 7) : mb_substr($number, 6);
    return $string;
}

/**
*
* Build Classes
*
*/
function build_classes( $count ) {
    $classes = "item"; 
    switch ( $count ) {
        case 0:
            $classes .= " su";
            break;
        case 1:
            $classes .= " m";
            break;
        case 2:
            $classes .= " tu";
            break;
        case 3:
            $classes .= " w";
            break;
        case 4:
            $classes .= " th";
            break;
        case 5:
            $classes .= " f";
            break;
        case 6:
            $classes .= " sa";
            break;
    }

    return $classes;
}

/**
*
* Find Start Date
*
*/
function find_start_date( $start_day ) {
    $start;
    switch ( $start_day ) {
        case "Sun":
            $start = 0;
            break;
        case "Mon":
            $start = 1;
            break;
        case "Tue":
            $start = 2;
            break;
        case "Wed":
            $start = 3;
            break;
        case "Thu":
            $start = 4;
            break;
        case "Fri":
            $start = 5;
            break;
        case "Sat":
            $start = 6;
            break;
        default:
            $start = 0;
    }

    return $start;
}


/**
*
* Get Month Object
*
*/
function get_month_obj( $date = false ) {
    $month = new StdClass();
    if ( !$date ) {    
        $month->date = date( "d" );
        $month->day = date( "D" ); 
        $month->mon = date( "m" ); 
        $month->year = date( "Y" ); 
        $month->num_of_days = date( "t" );
        $month->first_day = date( "D", 
            mktime( 0, 0, 0, $month->mon, 1, $month->year 
        ) );
    } else {
        $month->date = null;
        $month->day = null; 
        $month->mon = date( "m",
            mktime( 0, 0, 0, $date->mon, 1, $date->year
        ) ); 
        $month->year = date( "Y",
            mktime( 0, 0, 0, $date->mon, 1, $date->year
        ) ); 
        $month->num_of_days = date( "t",
            mktime( 0, 0, 0, $date->mon, 1, $date->year
            ) );
        $month->first_day = date( "D", 
            mktime( 0, 0, 0, $month->mon, 1, $month->year 
        ) );
    }
    return $month;
}
