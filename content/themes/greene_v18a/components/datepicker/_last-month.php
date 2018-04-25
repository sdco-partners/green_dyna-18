<?php
  /*
   * Section =>  _LAST-MONTH
  */

while ( $start_count > 0 ) { 
	$classes = build_classes( $count ); 
	$i = $y - $start_count;
	include( locate_template("components/datepicker/_single-item.php") );
	$start_count--; 
	$count++;
}
