<?php
/** 
 *
 * Template Name: Sitemap
 *
 */
$countRows = 0;
get_header(); 

if( have_posts() ) :
	while( have_posts() ) :
		the_post(); ?>
		<div class="block sitemap">
			<div class="wrapper">
				<?php
				/* BLOCK: TABLE */
				include( locate_template("components/_table.php") ); ?>
			</div>
		</div>

	<?php endwhile;
endif;

get_footer();
