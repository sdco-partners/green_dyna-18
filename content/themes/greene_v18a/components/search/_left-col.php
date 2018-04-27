<?php
  /*
  * Section =>  _LEFT-COL
  */
?>
<div class="left col">
	<div class="option availability">
		<label>Availability</label>
		<span id="opt-availability">available at any time</span>
	</div>
	<?php $dropdown = $range;
	include( locate_template( "components/search/_range-dropdown.php") ); ?>
</div>