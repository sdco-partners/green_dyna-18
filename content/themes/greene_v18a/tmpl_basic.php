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

			        /* BLOCK: CALYPSO */
			        elseif ( get_row_layout() === "calypso" ) : 
			            include( locate_template( "components/blocks/_calypso.php") );	

			        /* BLOCK: DAGMAR */
			        elseif ( get_row_layout() === "dagmar" ) : 
			            include( locate_template( "components/blocks/_dagmar.php") );	

			        /* BLOCK: EADA */
			        elseif ( get_row_layout() === "eada" ) : 
			            include( locate_template( "components/blocks/_eada.php") );	

			        /* BLOCK: FATIMA */
			        elseif ( get_row_layout() === "fatima" ) : 
			            include( locate_template( "components/blocks/_fatima.php") );

			        /* BLOCK: GAMILA */
			        elseif ( get_row_layout() === "gamila" ) : 
			            include( locate_template( "components/blocks/_gamila.php") );

			        /* BLOCK: HADREA */
			        elseif ( get_row_layout() === "hadrea" ) : 
			            include( locate_template( "components/blocks/_hadrea.php") );

			        /* BLOCK: ILMA */
			        elseif ( get_row_layout() === "ilma" ) : 
			            include( locate_template( "components/blocks/_ilma.php") );

			        endif;

				endwhile;
			endif; ?>
		</div>

	<?php endwhile;
endif;

$text = get_field( "form_text", "option" );
include( locate_template("components/_signup.php") );

get_footer();