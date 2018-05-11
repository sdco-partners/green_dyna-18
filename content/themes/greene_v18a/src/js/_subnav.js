/* eslint-disable no-unused-vars */
/* global delay */

/**
*
* SUBNAV JS
*
*/

/*
* Toggle Element
*/
const toggleEl = {
    add( $el ) {
        $el.classList.add( "pre" );
        delay( () => $el.classList.add( "opacity" ) );
    },

    remove( $el ) {
        $el.classList.remove( "opacity" );
        delay( () => $el.classList.remove( "pre" ) );
    },

    status( $el ) {
        return ( $el.classList.contains( "pre" ) &&
            $el.classList.contains( "opacity" ) );
    },
};

/*
* Toggle Tab Components
*/
const toggleTabs = () => {
    const $tabs = document.getElementsByClassName( "tabs" );
    const $schedule = document.getElementById( "comp-schedule" );
    const $availability = document.getElementById( "comp-available" );

    Array.prototype.forEach.call( $tabs, ( $tab ) => {
        $tab.addEventListener( "click", ( e ) => {
            e.preventDefault();
            Array.prototype.forEach.call( $tabs, ( $tab2 ) => {
                $tab2.classList.remove( "tabbed" );
            } );
            if ( $tab.classList.contains( "schedule-link" ) ) {
                if ( toggleEl.status( $schedule ) ) {
                    toggleEl.remove( $schedule );
                } else {
                    toggleEl.remove( $availability );
                    toggleEl.add( $schedule );
                    $tab.classList.add( "tabbed" );
                }
            } else if ( $tab.classList.contains( "available-link" ) ) {
                if ( toggleEl.status( $availability ) ) {
                    toggleEl.remove( $availability );
                } else {
                    toggleEl.remove( $schedule );
                    toggleEl.add( $availability );
                    $tab.classList.add( "tabbed" );
                }
            }
        } );
    } );
};
