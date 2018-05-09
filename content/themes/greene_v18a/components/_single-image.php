<?php
  /*
  * Section =>  _SINGLE-IMAGE
  */
if ( !isset( $count ) ) {
  	$count = 0;
}
if ( $image ) : ?>
	<div class="single image" id="img-<?php echo $count; ?>"
	    style="background-image: url('<?php echo $image['url']; ?>'); 
		width: <?php echo $image['width']; ?>px;
		height: <?php echo $image['height'] ?>px;" >
	</div>
<?php endif; 
$count++; ?>