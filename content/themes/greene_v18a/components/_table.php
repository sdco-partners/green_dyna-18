<?php
  /*
  * Section =>  _TABLE
  */

 if( get_row_layout() === "table_header" ) : ?>
	<div class="headers">
		<?php if( have_rows( "repeater" ) ) : 
			while( have_rows( "repeater" ) ) : 
				the_row(); ?>
				<h2><?php echo get_sub_field( "head" ); ?></h2>
			<?php endwhile;
		endif; ?>
	</div>
<?php elseif( get_row_layout() === "table_list" ) :
	if( $countRows === 1) :  ?>
		<div class="list">
	<?php endif; ?>
		<ul>
			<?php if( have_rows( "repeater" ) ) : 
				while( have_rows( "repeater" ) ) : 
					the_row(); 
					$link = get_sub_field( "link" ); ?>
					<li>
						<?php include( locate_template("components/_single-link.php") ); ?>
					</li>
				<?php endwhile;
			endif; ?>
		</ul>
	<?php if( $countRows === ( $totalRows - 1 ) ) :  ?>
		</div>
	<?php endif;
	
endif; ?>
