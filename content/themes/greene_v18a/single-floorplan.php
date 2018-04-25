<?php
/** 
 *
 * Single Post Floorplan Template
 *
 */ 
get_header(); ?>
<div class="floorplan layout">
	<?php include( locate_template("components/floorplan/_primary-data.php") );
	include( locate_template("components/floorplan/_schedule-tour.php") ); 
	include( locate_template("components/floorplan/_available-units.php") );?>
</div>

<? $text = get_field( "form_text", "option" );
include( locate_template("components/_signup.php") );
get_footer();
