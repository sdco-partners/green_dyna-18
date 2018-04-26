<?php
/** 
 *
 * Template Name: Contact
 *
 */

get_header(); 

if( have_posts() ) :
	while( have_posts() ) :
		the_post();
		$text = get_the_content();
		
		/* BLOCK: SIGNUP */
		include( locate_template("components/_signup.php") );

	endwhile;
endif;


get_footer();
