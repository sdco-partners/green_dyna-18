/* eslint-disable no-unused-vars */
/* global stringReplace */

/**
*
* PARALLAX JS
*
*/

/*
* Parallax
*/
const parallax = ( {
    plane,
    speed,
} = {} ) => {
    const $plane = document.getElementsByClassName( plane );
    Array.prototype.forEach.call( $plane, ( $el ) => {
        const elBox = $el.getBoundingClientRect();
        const mutate = Math.floor( ( elBox.top - 300 ) / speed );
        const currentStyle = ( $el.getAttribute( "style" ) !== null ) ?
            `${ $el.getAttribute( "style" ) } ` :
            "";
        const newStyle = ( currentStyle && currentStyle.indexOf( "transform" ) >= 0 ) ?
            stringReplace( currentStyle, "translateY", `(${ mutate }px)` ) :
            `${ currentStyle }transform: translateX(0) translateY(${ mutate }px)`;
        $el.setAttribute( "style", newStyle );
    } );
};

/*
* Init Parallax
*/
function initParallax( ...args ) {
    args.forEach( ( arg ) => {
        parallax( {
            plane: arg.plane,
            speed: arg.speed,
        } );
    } );
}
