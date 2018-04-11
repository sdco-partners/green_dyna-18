<?php
  /*
  * Section =>  _MAIN-BAR
  */
?>
<div class ="main bar">
	<div class="left flank">
		<?php include( locate_template( "components/foot/_logo.php") ); 
		include( locate_template( "components/foot/_address.php") ); ?>
	</div>
	<div class="right flank">
		<div class="sitemap links">
			<?php if( have_rows( "foot_links", "options" ) ) :
				while( have_rows( "foot_links", "options" ) ): 
					the_row(); 
					$link = get_sub_field( "link" ); ?>
					<a href="<?php echo $link[ "url" ]; ?>" 
					    target="<?php echo $link[ "target" ]; ?>">
						<?php echo $link[ "title" ]; ?>
					</a>
				<?php endwhile;
			endif; ?>
		</div>
		<div class="social links">
		    <?php include( locate_template( "components/_check-availability.php") );
		    include( locate_template( "components/_social-items.php") ); ?>
		</div>
	</div>
</div>
