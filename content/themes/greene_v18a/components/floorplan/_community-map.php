<?php
  /*
  * Section =>  _COMMUNITY-MAP
  */
  ?>
<div class="community-map">
  	<div class="map wrapper">
  		<div class="building view" 
	  		style="background-image: url( 'http://localhost/green_dyna-18/content/themes/greene_v18a/assets/images/img_building-view.jpg' );">
  			<?php echo file_get_contents( $_DIR . "/assets/svg/svg_floors.svg" );  ?>
  		</div>
  		<div class="map view">
  			<?php echo file_get_contents( $_DIR . "/assets/svg/svg_map.svg" );  ?>
  		</div>
	 </div>
</div>