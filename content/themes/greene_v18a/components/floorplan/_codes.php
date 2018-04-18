<?php
  /*
  * Section =>  _CODES
  */
?>
	<div class="codes">
	<h2><?php echo $name; ?></h2>
	<?php foreach( $codes as $code ) : ?>
		<h3><?php echo $code[ "code" ]; ?></h3>
	<?php endforeach; ?>
</div>