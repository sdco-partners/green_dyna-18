<?php
/** 
 *
 * Single Post Floorplan Template
 *
 */ 
get_header(); ?>

<div class="floorplan layout">
	<?php 
	/* BLOCK: PRIMARY CONTAINER */
	include( locate_template("components/floorplan/_primary-data.php") );

	/* BLOCK: SCHEDULE TOUR */
	include( locate_template("components/floorplan/_schedule-tour.php") ); 

	/* BLOCK: AVAILABLE UNITS */
	include( locate_template("components/floorplan/_available-units.php") );?>
</div>

<?php $text = get_field( "form_text", "option" );
include( locate_template("components/_signup.php") );

get_footer();
