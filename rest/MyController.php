<?php   
/* 
*	MyController
*/


require_once "soap_helpers/parameters.php";
require_once "SoapController.php";
require_once "RealPageAPI.php";

class MyController extends SoapController
{
    /*
    * CONSTRUCT
    *
    * Processes that happen upon component's initialization
    * 
    */
	public function __construct() {
		parent::__construct();
	}

    /*
    * METHOD REQUEST
    *
    */
	public function _refreshData() {

		try {
			$SOAP = new RealPageAPI();
			$Units = $SOAP->_fetchData();
			$set_time_stamp = new DateTime( 
				null, 
				new DateTimeZone( "America/New_York" ) 
			);
			$Units->TimeStamp = $set_time_stamp;
			$this->_saveData( $Units );
			return "Saving Done";
		} catch( Exception $e ) {
			echo "There was an error in the SOAP Call";
		}
	}

    /*
    * METHOD _CHECKSCHEDULE
    *
    */
	public function _checkSchedule() {

		$data = $this->_readData();
		$last_updated = $data->TimeStamp;
		$current_time = new DateTime( 
			null, 
			new DateTimeZone( "America/New_York" ) 
		);

		$missed_periods = array_filter( $this->Schedule, function( $period ) use( $current_time, $last_updated ) {
			return ( 
				( ( $current_time->format( "U" ) - $period->format( "U" ) ) > 0 )  && 
				( ( $period->format( "U" ) - $last_updated->format( "U" ) ) > 0 )
			); 
		} );

		if ( count ( $missed_periods ) > 0 ) {
			$this->_refreshData();
		}
	}


}