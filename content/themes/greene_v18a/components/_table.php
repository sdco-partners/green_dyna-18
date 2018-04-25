<?php
  /*
  * Section =>  _TABLE
  */ ?>
<div class="table">
	<?php if( have_rows( "table" ) ):
		$totalRows = count( get_field( "table" ) );
		while( have_rows( "table" ) ) :
			the_row();
			 if( get_row_layout() === "table_header" ) :
				include( locate_template("components/_table-header.php") );
			elseif( get_row_layout() === "table_list" ) :
				include( locate_template("components/_table-list.php") );
			endif;
			$countRows++; 
		endwhile;
	endif; ?>
</div>
