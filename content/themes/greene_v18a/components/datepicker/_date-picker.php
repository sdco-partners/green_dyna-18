<?php
  /*
  * Section =>  _DATE-PICKER
  */
?>
<div class="overlay"></div>

<div class="datepicker wrapper">
	<?php include( locate_template("components/_heading.php") );
	include( locate_template("components/datepicker/_calendar-nav.php") );  ?>

	<div class="grid wrapper">
		<?php include( locate_template("components/datepicker/_calendar-body.php") );  ?>

	</div>
</div>