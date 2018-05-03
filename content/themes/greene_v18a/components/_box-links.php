<?php
  /*
  * Section =>  _BOX-LINKS
  */ 
if( have_rows( $field, $page ) ) :
	while( have_rows( $field, $page ) ) :
		the_row(); 
		$link = get_sub_field( "link" ); ?>
		<div class="link-wrapper">
			<a href="<?php echo $link[ "url" ]; ?>"
				target="<?php echo $link[ "url" ]; ?>">
				<div class="box">
					<span><?php echo $link[ "title" ]; ?></span>
				</div>
			</a>
		</div>
	<?php endwhile;
endif; ?>