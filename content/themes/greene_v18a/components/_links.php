<?php
  /*
  * Section =>  _LINKS
  */

if( have_rows( $field, $page ) ) :
	while( have_rows( $field, $page  ) ): 
		the_row(); 
		$link = get_sub_field( "link" );
		include( locate_template("components/_single-link.php") );
	endwhile;
endif; ?>