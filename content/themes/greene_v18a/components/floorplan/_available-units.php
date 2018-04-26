<?php
  /*
  * Section =>  _AVAILABLE-UNITS
  */
  $heading = "Available Units"; ?>


  <div class="available units component">
  	<div class="wrapper">
  		<?php include( locate_template("components/_heading.php") ); 
  		include( locate_template("components/floorplan/_units.php") ); ?>
  	</div>  	
  </div>

  <?php $heading = "Desired Move-In Date";
  include( locate_template("components/datepicker/_date-picker.php") ); ?>