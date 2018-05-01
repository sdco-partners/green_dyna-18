<?php
  /*
  * Section =>  _LEFT-FLANK
  */
?>
<div class="left flank">
    <div class="hamburger" id="ham">
        <?php echo file_get_contents( $_DIR . "/assets/svg/svg_hamburger.svg" ); ?>
    </div>
    <?php include( locate_template( "components/_check-availability.php" ) ); 
    include( locate_template( "components/menu/_menu.php" ) );?>
</div>