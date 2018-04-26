<?php
/** 
 *
 * Template Name: Archives Floorplan
 *
 */

get_header(); 
$archive_id = 29; ?>

<div class="content blocks">
	<?php if( have_rows( "content", $archive_id ) ) :
		while( have_rows( "content", $archive_id ) ) :
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
	endif;

	query_posts($query_string . "&order=ASC");
	if( have_posts() ) : ?>
		<div class="floorplans grid">
		<?php while( have_posts() ) :
			the_post();

			include( locate_template( "components/floorplan/_floorplan-grid.php") );

		endwhile; ?>
		</div>
	<?php endif; ?>

</div>

<?php $text = get_field( "form_text", "option" );

/* BLOCK: SIGNUP */
include( locate_template("components/_signup.php") );

get_footer();