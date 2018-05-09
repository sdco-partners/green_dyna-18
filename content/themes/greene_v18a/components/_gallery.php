<?php
  /*
  * Section =>  _GALLERY
  */
  
$gallery = get_sub_field( "gallery" ); ?>
<div class="gallery-wrapper">
		<div class="gallery">
		    <?php $count = 0;
		    foreach( $gallery as $image ) :
			  	include( locate_template("components/_single-image.php") );
			endforeach; ?>
		</div>
		<div class="prev"></div>
		<div class="next"></div>
</div>