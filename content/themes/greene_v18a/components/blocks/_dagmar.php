<?php
  /*
  * Section =>  _FATIMA
  */ 
$gallery = get_sub_field( "gallery" ); ?>
<div class="block dagmar">
    <div class="gallery-wrapper lightbox ">
        <div class="gallery">
            <?php foreach( $gallery as $image ) : 
                include( locate_template("components/_single-image.php") );
            endforeach; ?>
        </div>
        <div class="prev"></div>
        <div class="next"></div>
        <div class="close"></div>
    </div>
</div>