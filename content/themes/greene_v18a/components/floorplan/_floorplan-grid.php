<?php
  /*
  * Section =>  _SINGLE-IMAGE
  */	
$map = get_field( "map" ); 
$name = strtolower( get_the_title() ); 
$codes = get_field( "codes" ); 
$link = get_the_permalink(); 
$pdf = get_field( "pdf" ); ?>

<div class="single floorplan" id="<?php echo $name; ?>">
	<div class="rendering">
		<?php include( locate_template( "components/floorplan/_map.php" ) ); 
		include( locate_template( "components/floorplan/_not-available.php" ) ); ?>
	</div>
	<div class="data">
		<?php include( locate_template( "components/floorplan/_codes.php" ) ); 
		include( locate_template( "components/floorplan/_attributes.php" ) ); ?> 
	</div>
</div>