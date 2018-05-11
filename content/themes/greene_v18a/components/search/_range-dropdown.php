<?php
  /*
  * Section =>  _RANGE-DROPDOWN
  */
?>

<div class="option <?php echo strtolower( str_replace( " ", "-", $dropdown->label ) ); ?>">
	<label>
		<?php echo $dropdown->label; ?>
	</label>
	<span class="min-range">
		<select name="min-range">
			<option disabled selected hidden>
				
				<?php echo $dropdown->min_label; ?>
			</option>
			<?php foreach( $dropdown->choices as $option ) {
				include( locate_template( "components/search/_single-range.php") );
			} ?>
		</select>
	</span>
	<span class="max-range">
		<select name name="max-range">
			<option disabled selected hidden>
				<?php echo $dropdown->min_label; ?>
			</option>
			<?php foreach( $dropdown->choices as $option ) {
				include( locate_template( "components/search/_single-range.php") );
			} ?>
		</select>
	</span>
</div>
