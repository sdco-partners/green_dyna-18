<?php
  /*
  * Section =>  _CALENAR-NAV
  */
?>
<div class="datepicker navigation">
	<div class="left arrow">
		<?php echo file_get_contents( $_DIR . "/assets/svg/svg_arrow.svg" ); ?>
	</div>
	<div class="calendar header">
		<span class="month"><?php echo date( "F" ); ?></span>
		<span> &nbsp; </span>
		<span class="year"><?php echo date( "Y" ); ?></span>
	</div>
	<div class="right arrow">
		<?php echo file_get_contents( $_DIR . "/assets/svg/svg_arrow.svg" ); ?>
	</div>
</div>