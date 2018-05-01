<?php
  /*
  * Section =>  _SCHEDULE-TOUR
  */
$heading = "Schedule a Tour"; ?>

<div id="comp-schedule" class="schedule component">
  	<div class="wrapper">
  		<?php include( locate_template("components/_heading.php") ); 
  		echo do_shortcode( '[contact-form-7 id="177" title="Schedule Tour Form"]' ); ?>
  	</div>  	
</div>