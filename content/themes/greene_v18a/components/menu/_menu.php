<?php
  /*
  * Section =>  _MENU
  */
?>
<section id="menu">
	<div class="menu-wrapper">
		<?php include( locate_template( "components/head/_main-menu-items.php" ) );
			include( locate_template( "components/head/_sub-menu-items.php" ) ); ?>
		<div class="menu logo">
		</div>
		<?php include( locate_template( "components/head/_menu-info.php" ) ); ?>

	</div>
</section>