<?php
  /*
  * Section =>  _RANGE-DROPDOWN
  */
?>

<div class="option rent-range">
	<label>
		<?php echo $dropdown->label; ?>
	</label>
	<select name="min-range">
		<option disabled selected hidden>
			
			<?php echo $dropdown->min_label; ?>
		</option>
		<?php foreach( $dropdown->choices as $option ) {
			include( locate_template( "components/search/_single-range.php") );
		} ?>
	</select>
	<select name="max-range">
		<option disabled selected hidden>
			<?php echo $dropdown->min_label; ?>
		</option>
		<?php foreach( $dropdown->choices as $option ) {
			include( locate_template( "components/search/_single-range.php") );
		} ?>
	</select>
</div>
