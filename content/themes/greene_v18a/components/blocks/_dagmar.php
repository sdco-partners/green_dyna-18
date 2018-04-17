<?php
  /*
  * Section =>  _FATIMA
  */ 
  $gallery = get_sub_field( "gallery" ); ?>
  <div class="block dagmar">
  	<div class="wrapper">
  		<?php foreach( $gallery as $image ) : 
	  		include( locate_template("components/_single-image.php") );
		endforeach; ?>
  	</div>
  </div>