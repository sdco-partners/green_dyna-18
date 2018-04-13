<?php
/** 
 *
 * Template Name: Basic
 *
 */

get_header(); 

if( have_posts() ) :
	while( have_posts() ) :
		the_post(); ?>

		<div class="content blocks">
			<?php if( have_rows( "content" ) ):
				while( have_rows( "content" ) ) :
					the_row();

			        /* BLOCK: AHUVA */
			        if ( get_row_layout() === "ahuva" ) :  
			        	  
			            include( locate_template("components/blocks/_ahuva.php") );

			        /* BLOCK: BAHIRA */
			        elseif ( get_row_layout() === "bahira" ) : 
			            include( locate_template( "components/blocks/_bahira.php") );	

			        endif;

				endwhile;
			endif; ?>
		</div>

	<?php endwhile;
endif;

$text = get_field( "form_text", "option" );
include( locate_template("components/_signup.php") );

get_footer();