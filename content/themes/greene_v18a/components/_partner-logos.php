<?php
  /*
  * Section => _PARTNER-LOGOS
  */
?>
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