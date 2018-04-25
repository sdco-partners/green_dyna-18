<?php
  /*
  * Section =>  _TABLE-HEADER
  */ ?>
<div class="headers">
	<?php if( have_rows( "repeater" ) ) : 
		while( have_rows( "repeater" ) ) : 
			the_row(); ?>
			<h2><?php echo get_sub_field( "head" ); ?></h2>
		<?php endwhile;
	endif; ?>
</div>