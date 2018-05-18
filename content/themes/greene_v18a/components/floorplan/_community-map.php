<?php
  /*
  * Section =>  _COMMUNITY-MAP
  */
  ?>
<div id="comp-community" class="community-map">
    <div class="map wrapper">
        <div class="floornumber">
            <span id="currentFloor">Choose A Floor</span>
        </div>
        <div class="building view" 
        style="background-image: url( 'http://localhost/green_dyna-18/content/themes/greene_v18a/assets/images/img_building-view.jpg' );">
            <?php echo file_get_contents( $_DIR . "/assets/svg/svg_floors.svg" );  ?>
        </div>
        <div id="mapView" class="map view">
            <?php echo file_get_contents( $_DIR . "/assets/svg/svg_map.svg" );  ?>
            <div id="module" class="module">
                <div class="first row">
                    <span id="mod-name"></span>
                    <span id="mod-code"></span>
                    <span id="dast">&mdash;</span>
                    <span id="mod-unitnumber"></span>
                </div>
                <div class="second row">
                    <span id="mod-bed"></span>
                    <span>/</span>
                    <span id="mod-bath"></span>
                    <span>/</span>
                    <span id="mod-sqft"></span>
                </div>
                <div class="third row">
                    <span id="mod-price"></span>
                </div>
            </div>
        </div>
    </div>
</div>