<?php
  /*
  * Section =>  _TELE
  */
?>
<div class="tele">
    <?php $tele = get_field( "contact_tele", "option" ); ?>
    <a href="tel:<?php echo $tele; ?>">
    	<?php echo print_phone( $tele, "." ); ?>
	</a>
</div>