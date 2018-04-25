<?php
  /*
   * Section =>  _THIS-MONTH
  */

for( $i = 1; $i <= $curr_mon->num_of_days; $i++ ) {
	$classes = build_classes( $count );
	include( locate_template("components/datepicker/_single-item.php") );
	$count = ( $count > $week - 1 ) ? 0 : $count + 1;
}

