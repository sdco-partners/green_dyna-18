<?php
  /*
  * Section =>  _BAHIRA
  */
$text = get_sub_field( "text" ); 
?>

<div class="block bahira">
	<div class="wrapper">
		<?php include( locate_template("components/_text.php") );
		include( locate_template("components/_gallery.php") ); ?>
	</div>
	<?php include( locate_template("components/_subnav-bar.php") ); ?>
</div>