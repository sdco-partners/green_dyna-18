<?php
  /*
  * Section =>  _SINGLE-IMAGE
  */	
$map = get_field( "map" ); 
$name = strtolower( get_the_title() ); 
$codes = get_field( "codes" ); 
$pdf = get_field( "pdf" ); ?>

<div class="single floorplan">
	<div class="rendering">
		<?php include( locate_template( "components/floorplan/_map.php") ); ?>
		<div class="not available">
			<h2>Currently Not Available</h2>
		</div>
	</div>
	<div class="data">
		<?php include( locate_template( "components/floorplan/_codes.php") ); 
		include( locate_template( "components/floorplan/_attributes.php") );
		?> 
	</div>
</div>