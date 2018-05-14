<?php
// display all errors
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once "MyAPI.php";
require_once "MyController.php";

// Requests from the same server don't have a HTTP_ORIGIN header
if ( !array_key_exists('HTTP_ORIGIN', $_SERVER) ) {
    $_SERVER[ "HTTP_ORIGIN" ] = $_SERVER[ "SERVER_NAME" ];


}

// Boot-up Controller
$Controller = new MyController();
$Controller->_checkSchedule();

try {
	// Boot-up ReST API
    $API = new MyAPI( $_REQUEST[ "request" ], $_SERVER[ "HTTP_ORIGIN" ] );
    echo $API->processAPI();

} catch ( Exception $e ) {
    echo json_encode( Array( "error" => $e->getMessage() ) );
}
