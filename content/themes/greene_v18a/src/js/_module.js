/* eslint-disable no-unused-vars */
/* global findChildClass */
/* global mapData */

/*
* Module Find Data
*/
const moduleFindData = ( $unit ) => {
    const unitClasses = $unit.classList;
    unitClasses.forEach( ( className ) => {
        mapData.find( className );
    } );
};

/*
* Set Unit URL
*/
const setUnitURL = () => {
    const $floorplanName = document.getElementById( "mod-name" ).textContent;
    const url = `http://localhost/green_dyna-18/floorplan/${ $floorplanName }`;
    return url;
};

/*
* Module Position
*/
const modulePosition = () => {
    const $gunits = document.getElementsByClassName( "g-unit" );
    const $module = document.getElementById( "module" );
    const $mapView = document.getElementById( "mapView" );
    Array.prototype.forEach.call( $gunits, ( $unit ) => {
        $unit.addEventListener( "mousemove", ( e ) => {
            if ( $unit.classList.contains( "gpin" ) ) {
                $module.style.top = `${ e.offsetY + 25 }px`;
                $module.style.left = `${ e.offsetX + 25 }px`;
            }
        } );
        $unit.addEventListener( "mouseenter", ( e ) => {
            if ( $unit.classList.contains( "gpin" ) ) {
                moduleFindData( $unit );
                $module.classList.add( "opacity" );
            }
        } );
        $unit.addEventListener( "mouseleave", ( e ) => {
            if ( $unit.classList.contains( "gpin" ) ) {
                $module.classList.remove( "opacity" );
            }
        } );
        $unit.addEventListener( "click", ( e ) => {
            if ( $unit.classList.contains( "gpin" ) ) {
                document.location.href = setUnitURL();
            }
        } );
    } );
};
