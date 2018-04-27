<?php
  /*
  * Section =>  _LEFT-CONTENT
  */
?>

<div class="left content wrapper">
	
	<div class="top bar">
		<?php include( locate_template("components/floorplan/_codes.php") );
		include( locate_template("components/_files.php") ); ?>
	</div>
	<div class="middle bar">
		<?php include( locate_template("components/floorplan/_attributes.php") ); ?>
	</div>
	<div class="bottom bar">
		<?php include( locate_template("components/_subnav-tab.php") ); ?>
	</div>

</div>