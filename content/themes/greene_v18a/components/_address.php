<?php
  /*
  * Section =>  _ADDRESS
  */
?>
<div class= "address">
	<a href="">
		<span class="line one">
			<?php echo get_field( "address_line_1", "option" );?>
		</span>
		<span class="line two">
			<?php echo get_field( "address_line_2", "option" );?>
		</span>
		<span class="line three">
			<?php echo get_field( "address_line_3", "option" );?>
		</span>								
	</a>
	<?php $tele = get_field( "contact_tele", "option" ); ?>
	<a href="tel:<?php echo $tele; ?>">
		<div class="line four">
			<?php echo print_phone( $tele, "." );?>
		</div>
	</a>
</div>