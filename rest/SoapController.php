<?php   
/* 
*	abstract class SOAP Controller
*/

require_once "SoapAPI.php";

abstract class SoapController {

	protected $Schedule = array();

    /*
    * CONSTRUCT
    *
    * Processes that happen upon component's initialization
    * 
    */
	protected function __construct() {
		$schedule_periods = array( 
			7,  // <-- Period 1 
			11, // <-- Period 2 
			13, // <-- Period 3 
			15, // <-- Period 4 
			18, // <-- Period 5 
			19, // <-- Period 6 
			21, // <-- Period 7 
			23  // <-- Period 8 
		);
		foreach( $schedule_periods as $hour ) {
			$this_period = new DateTime( 
				null,
				new DateTimeZone( "America/New_York") 
			);
			$this->Schedule[] = $this_period->setTime( $hour, 0 );
		}
	}

    /*
    * METHOD _SAVEDATA
    *
    */
	protected function _saveData( $data ) {
		$encoded_data = serialize( $data );
		file_put_contents( "data/units.php", $encoded_data );
	}

    /*
    * METHOD _READDATA
    *
    */
	protected function _readData() {
	 	$Units = file_get_contents( "data/units.php" );
	 	$Units = unserialize( $Units );
	 	return $Units;
	}

    /*
    * METHOD _PRINTDATA
    *
    */
	public function _printData( $Data ) {
		echo "<pre>";
		print_r( $Data );
		echo "</pre>";
	}
}