<?php
  /*
   * Section =>  _NEXT-MONTH
  */
  
if( $count <= $week && $count !== 0 ) { 
	$i = 1;
	while ( $count <= $week ) {
		include( locate_template("components/datepicker/_single-item.php") );
		$i++; 
		$count++; 	
	}
}