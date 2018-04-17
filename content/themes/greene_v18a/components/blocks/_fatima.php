<?php
  /*
  * Section =>  _FATIMA
  */ ?>
<div class="block fatima">
	<div class="wrapper">
		<?php if ( have_rows( "repeater" ) ) :
			while( have_rows( "repeater" ) ) :
				the_row(); 
				$image = get_sub_field( "image" );
				$text = get_sub_field( "text" );
				$overlay_1 = ""; 
				$overlay_2 = "";
				$field = "link-repeater"; 
				$page = get_the_ID(); ?>

				<div class="repeater">
					<div class="image wrapper">
						<?php include( locate_template("components/_single-image.php") ); ?>
					</div>
					<div class="text wrapper">
						<?php include( locate_template("components/_text.php") ); ?>
						<div class="links">
							<?php include( locate_template("components/_links.php") ); ?>
						</div>
					</div>
				</div>

		<?php endwhile;
		endif; ?>
	</div>
</div>