<?php 
/* 
* MyAPI
*/

require_once "rest_helpers/models.php";
require_once "soap_helpers/floorplans.php";
require_once "RestAPI.php";

class MyAPI extends RestAPI 
{
	protected $User;
	protected $Controller;

	public function __construct( $request, $origin ) {
		parent::__construct( $request );

		$APIKey = new Models\APIKey();
		$User = new Models\User();

		if ( !array_key_exists( "apiKey", $this->request ) ) {
			throw new Exception( "No API Key provided" );
		} else if ( !$APIKey->verifyKey( $this->request[ "apiKey" ], $origin ) ) {
			throw new Exception( "Invalid API Key" );
		} else if ( !array_key_exists( "token", $this->request ) && !$User->get( "token", $this->request[ "token" ] ) ) {
			throw new Exception( "Invalid User Token" );
		}
		$this->User = $User;
	}
	
	protected function units() {
		if ( $this->method == "GET" ) {
		 	$Units = $this->_readData();
			return $Units;
		} else {
			return "Only accepts GET requests";
		}
	}

	protected function unitsby() {
		if ( $this->method == "GET" ) {
			if ( $this->request[ "filter" ] ) {
			 	$Units = $this->_readData();
			 	$Filtered_Units = new StdClass();
			 	$filter = $this->request["filter"];

			 	if( !array_key_exists( "type", $this->request ) ) {
			 		return "No Type provided";
			 	} if ( $this->request[ "type" ] === "name" ) {
				 	$Filtered_Units->AvailableUnits = array_filter( 
				 		$Units->AvailableUnits, function( $Unit ) use( $filter ) {
				 		return ( $Unit->Name === $filter );
				 	} );
				} else if ( $this->request[ "type" ] === "floor" ) {
				 	$Filtered_Units->AvailableUnits = array_filter( 
				 		$Units->AvailableUnits, function( $Unit ) use( $filter ) {
				 		return ( $Unit->FloorNumber === intval( $filter ) );
				 	} );
				} else {
					return "Invalid Type";
				}
			 	$Filtered_Units->TimeStamp = $Units->TimeStamp;
				return $Filtered_Units;
			} else {
				return "No Filter provided";
			}
		} else {
			return "Only accepts GET requests";
		}
	}

	protected function _readData() {
	 	$Units = file_get_contents( "data/units.php" );
	 	$Units = unserialize( $Units );
	 	return $Units;
	}
}