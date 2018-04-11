<?php
  /*
  * Section =>  _RIGHT-FLANK
  */

function print_phone($number, $splitter) {
    $string = "";
    $is_one = ( $number[0] === '1' );
    $string .= $is_one ? mb_substr($number, 0, 4) : mb_substr($number, 0, 3);
    $string .= $splitter;
    $string .= $is_one ? mb_substr($number, 3, 3) : mb_substr($number, 2, 3);
    $string .= $splitter;
    $string .= $is_one ? mb_substr($number, 7) : mb_substr($number, 6);
    return $string;
} 

?>
<div class="right flank">
    <div class="social items">
        <?php if( have_rows( "social_rep", "option" ) ) :
            while( have_rows( "social_rep", "option" ) ) :
                the_row(); 
                $icon = get_sub_field( "icon" );
                $link = get_sub_field( "link" ); ?>
                <div class="item">
                    <a href="<?php echo $link[ "url" ]; ?>">
                        <?php echo file_get_contents( $icon[ "url" ] ); ?>
                    </a>
                </div>
            <?php endwhile;
        endif; ?>
    </div>
    <div class="tele">
        <?php $tele = get_field( "contact_tele", "option" ); ?>
        <a href="tel:<?php echo $tele; ?>">
        	<?php echo print_phone( $tele, "." ); ?>
    	</a>
    </div>
</div>