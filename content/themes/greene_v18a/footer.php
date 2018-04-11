<?php
/**
 * Footer
 *
 * Contans footer assets.
 *
 * @link https://github.com/sdco-partners/Init
 *
 * @package Wordpress
 * @subpackage Footer
 * @since 1.0
 * @version 1.0
 */
$_DIR = get_template_directory_uri(); ?>
			<footer id="foot">
				<div class ="main bar">
					<div class="left flank">
						<div class="logo">
							<?php echo file_get_contents( $_DIR . "/assets/svg/svg_footer-logo.svg" ); ?>
						</div>
						<div class= "address">
							<a href="">
								<span class="line one">
									<?php echo get_field( "address_line_1", "option" );?>
								</span>
								<span class="line two">
									<?php echo get_field( "address_line_2", "option" );?>
								</span>
								<span class="line three">
									<?php echo get_field( "address_line_3", "option" );?>
								</span>								
							</a>
							<?php $tele = get_field( "contact_tele", "option" ); ?>
							<a href="tel:<?php echo $tele; ?>">
								<div class="line four">
									<?php echo print_phone( $tele, "." );?>
								</div>
							</a>
						</div>
					</div>
					<div class="right flank">
						<div class="sitemap links">
							<?php if( have_rows( "foot_links", "options" ) ) :
								while( have_rows( "foot_links", "options" ) ): 
									the_row(); 
									$link = get_sub_field( "link" ); ?>
									<a href="<?php echo $link[ "url" ]; ?>" 
									    target="<?php echo $link[ "target" ]; ?>">
										<?php echo $link[ "title" ]; ?>
									</a>
								<?php endwhile;
							endif; ?>
						</div>
						<div class="social links">
						    <?php include( locate_template( "components/_check-availability.php") );
						    include( locate_template( "components/_social-items.php") ); ?>
						</div>
					</div>
					
				</div>
				<div class="sub bar">
					<div class="left flank">
						<div class="static items">
							<div class="item">
								&copy;THE GREENE <?php echo date( "Y" ); ?>
							</div>
							<div class="item">
								<a href="">Site Map</a>
							</div>						
							<div class="item">
								<a href="">Privacy Policy</a>
							</div>
						</div>
						<div class="partner logos">
							<?php if( have_rows( "partner_links", "options" ) ) :
								while( have_rows( "partner_links", "options" ) ): 
									the_row(); 
									$icon = get_sub_field( "icon" ); ?>
									<div class="item">
										<?php echo file_get_contents( $icon[ "url" ] ); ?>
									</div>
								<?php endwhile;
							endif; ?>
						</div>
					</div>
					<div class="right flank">
						Site by <a href="https://sdcopartners.com" target="_blank">SDCO Partners</a>
					</div>
				</div>

				
			</footer>
			<?php wp_footer(); ?>
		</div> <!-- root -->
	</body><!-- end -->
</html>
