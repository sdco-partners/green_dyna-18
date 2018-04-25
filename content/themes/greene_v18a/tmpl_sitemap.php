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
				<div class="table">
					<?php if( have_rows( "table" ) ):
						$totalRows = count( get_field( "table" ) );
						while( have_rows( "table" ) ) :
							the_row();
							include( locate_template("components/_table.php") );
							$countRows++; 
						endwhile;
					endif; ?>
				</div>
			</div>
		</div>

	<?php endwhile;
endif;

get_footer();















