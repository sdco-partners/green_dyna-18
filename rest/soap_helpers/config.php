<?php 
require_once( 'helper_classes.php' );

$header_url = 'http://realpage.com/webservices';
$floor_plan_wsdl = 'http://onesite.realpage.com/WebServices/CrossFire/AvailabilityAndPricing/FloorPlan.asmx?WSDL';
$logging_wsdl = 'http://onesite.realpage.com/WebServices/CrossFire/AvailabilityAndPricing/Logging.asmx?WSDL';
$pick_list_wsdl = 'http://onesite.realpage.com/WebServices/CrossFire/AvailabilityAndPricing/PickList.asmx?WSDL';
$unit_wsdl = 'http://onesite.realpage.com/WebServices/CrossFire/AvailabilityAndPricing/Unit.asmx?WSDL';


// Debugger
$sess_debug = new Debugger();
$sess_debug->trace = true;
$sess_debug->exceptions = true;

/* Headers */
$sess_headers = new Headers();
$sess_headers->WSDL = $unit_wsdl;
$sess_headers->URL = $header_url;

/* Authentication */
$sess_auth = new Auth();
$sess_auth->UserName = 'SDesignCo';
$sess_auth->Password = 'SDesignCo1234';
$sess_auth->SiteID = 3603334;
$sess_auth->PmcID = 1049405; 