<?php
/** 
 *
 * Template Name: Sitemap
 *
 */

get_header(); 

if( have_posts() ) :
	while( have_posts() ) :
		the_post(); ?>
		<div class="block sitemap">
			<div class="wrapper">
				<div class="table">
					<div class="headers">
						<h2>sitemap</h2>
						<h2>floor plans</h2>
					</div>
					<div class="list">
						<ul>
							<li>
								<a href="<?php get_page_link(); ?>">HOME</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">FLOOR PLANS</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">AMENITIES</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">NEIGHBORHOOD</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">GALLERY</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">VIRTUAL TOUR</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">CONTACT</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">RESIDENT PORTAL</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">LEASE ONLINE NOW</a>
							</li>
						</ul>
						<ul>
							<li>
								<a href="<?php get_page_link(); ?>">reedy</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">keowee</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">eastatoe</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">jocassee</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">toxaway</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">saluda</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">pacolet</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">tyger</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">brushy</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">broad</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">chattooga</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">wildcat</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">brasstown</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">whitewater</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">summit</a>
							</li>
							<li>
								<a href="<?php get_page_link(); ?>">bowen</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

	<?php endwhile;
endif;

get_footer();















