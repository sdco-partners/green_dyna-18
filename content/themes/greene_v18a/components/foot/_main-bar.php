<?php
  /*
  * Section =>  _MAIN-BAR
  */
?>
<div class ="main bar">
	<div class="left flank">
		<?php include( locate_template( "components/foot/_logo.php") ); 
		include( locate_template( "components/_address.php") ); ?>
	</div>
	<div class="right flank">
		<?php include( locate_template( "components/foot/_sitemap.php") ); ?>

		<div class="social links">
		    <?php include( locate_template( "components/_check-availability.php") );
		    include( locate_template( "components/_social-items.php") ); ?>
		</div>
	</div>
</div>
