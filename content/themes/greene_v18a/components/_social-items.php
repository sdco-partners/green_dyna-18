<?php
  /*
  * Section =>  _SOCIAL-ITEMS
  */
?>

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