<?php
  /*
  * Section =>  _PRIMARY-DATA
  */

$map = get_field( "map" );
$name = strtolower( get_the_title() );
$codes = get_field( "codes" );
$pdf = get_field( "pdf" ); ?>

<div class="primary data component" id="<?php echo $name; ?>">
	<?php include( locate_template("components/floorplan/_left-content.php") );
	include( locate_template("components/floorplan/_right-content.php") ); ?>
</div>