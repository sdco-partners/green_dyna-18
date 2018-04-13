<?php
  /*
  * Section =>  _SUB-MENU-ITEMS
  */
?>

<div class="sub menu items">
	<?php if( have_rows( "sub_links", "option" ) ) :
		while( have_rows( "sub_links", "option" ) ) :
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
</div>