/* eslint-disable no-unused-vars */

/*
* Module Position
*/

const modulePosition = () => {
    const $gunits = document.getElementsByClassName( "g-unit" );
    const $module = document.getElementById( "module" );
    Array.prototype.forEach.call( $gunits, ( $unit ) => {
        $unit.addEventListener( "mousemove", ( e ) => {
            if ( $unit.classList.contains( "gpin" ) ) {
                $module.style.top = `${ e.clientY - 200 }px`;
                $module.style.left = `${ e.clientX }px`;
            }
        } );
        $unit.addEventListener( "mouseenter", ( e ) => {
            if ( $unit.classList.contains( "gpin" ) ) {
                $module.classList.add( "opacity" );
            }
        } );
        $unit.addEventListener( "mouseleave", ( e ) => {
            if ( $unit.classList.contains( "gpin" ) ) {
                $module.classList.remove( "opacity" );
            }
        } );
    } );
};
