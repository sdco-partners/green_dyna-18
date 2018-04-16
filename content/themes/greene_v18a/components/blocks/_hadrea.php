<?php
  /*
  * Section =>  _HADREA
  */ ?>

<div class="block hadrea">
	<div class="image wrapper">
		<?php if ( have_rows( "repeater" ) ) :
			while( have_rows( "repeater" ) ) :
				the_row(); 
				$image = get_sub_field( "image" );
				$overlay_1 = get_sub_field( "overlay_text_1" );
				$overlay_2 = get_sub_field( "overlay_text_2" ); ?>		

				<div class="repeater">
					<?php include( locate_template("components/_single-image.php") ); 
					include( locate_template("components/_overlays.php") ); ?>
				</div>

		<?php endwhile;
		endif; ?>
	</div>
</div>