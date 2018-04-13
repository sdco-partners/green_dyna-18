<?php
  /*
  * Section =>  _SUBNAV-BAR
  */
  $field = "links";
  $page = get_the_ID();
?>
<div class="subnav bar">
	<div class="links">
		<?php include( locate_template("components/_links.php") );?>	
	</div>
</div>