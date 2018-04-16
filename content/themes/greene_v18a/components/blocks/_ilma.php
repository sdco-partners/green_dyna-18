<?php
  /*
  * Section =>  _ILMA
  */ 
$text = get_sub_field( "text" ); 
$image = get_sub_field( "image" );
$overlay_1 = get_sub_field( "overlay_text_1" );
$overlay_2 = get_sub_field( "overlay_text_2" );
?>

<div class="block ilma">
	<div class="wrapper">
		<div class="image wrapper">
			<?php include( locate_template("components/_single-image.php") ); 
			include( locate_template("components/_overlays.php") ); ?>
		</div>
		<?php include( locate_template("components/_text.php") ); ?>
	</div>
</div>