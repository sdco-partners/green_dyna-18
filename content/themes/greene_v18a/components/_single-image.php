<?php
  /*
  * Section =>  _single-image
  */

  if( $image ) : ?>

	<div class="single image"
	    style="background-image: url('<?php echo $image['url']; ?>'); 
		width: <?php echo $image['width']; ?>px;
		height: <?php echo $image['height'] ?>px;">
	</div>
<?php endif; ?>