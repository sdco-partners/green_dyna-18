<?php
  /*
  * Section =>  _SUB-BAR
  */
?>
<div class="sub bar">
	<div class="left flank">
		<div class="static items">
			<div class="item">
				&copy;THE GREENE <?php echo date( "Y" ); ?>
			</div>
			<div class="item">
				<a href="">Site Map</a>
			</div>						
			<div class="item">
				<a href="">Privacy Policy</a>
			</div>
		</div>
		<div class="partner logos">
			<?php if( have_rows( "partner_links", "options" ) ) :
				while( have_rows( "partner_links", "options" ) ): 
					the_row(); 
					$icon = get_sub_field( "icon" ); ?>
					<div class="item">
						<?php echo file_get_contents( $icon[ "url" ] ); ?>
					</div>
				<?php endwhile;
			endif; ?>
		</div>
	</div>
	<div class="right flank">
		Site by <a href="https://sdcopartners.com" target="_blank">SDCO Partners</a>
	</div>
</div>