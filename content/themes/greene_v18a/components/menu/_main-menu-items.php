<?php
  /*
  * Section =>  _MAIN-MENU-ITEMS
  */
?>
<div class="main menu items">
	<?php if( have_rows( "menu_links", "option" ) ) :
		while( have_rows( "menu_links", "option" ) ) :
			the_row(); 
			$link = get_sub_field( "link" ); ?>
			<div class="link-wrapper">
				<a href="<?php echo $link[ "url" ]; ?>"
					target="<?php echo $link[ "target" ]; ?>">
					<?php echo $link[ "title" ]; ?>
				</a>
			</div>
		<?php endwhile;
	endif; ?>
</div>