<?php
  /*
  * Section =>  _MENU
  */
?>
<section id="menu">
	<div class="menu-wrapper">
		<?php include( locate_template( "components/menu/_main-menu-items.php" ) );
			include( locate_template( "components/menu/_sub-menu-items.php" ) ); ?>
		<div class="menu logo">
			<?php echo file_get_contents( $_DIR . "/assets/svg/svg_logo.svg" ); ?>
		</div>
		<?php include( locate_template( "components/menu/_menu-info.php" ) ); ?>

	</div>
</section>