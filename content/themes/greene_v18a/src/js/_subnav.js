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

    removeAll( $els, className ) {
        Array.prototype.forEach.call( $els, ( $el ) => {
            $el.classList.remove( className );
        } );
    },

    status( $el ) {
        return ( $el.classList.contains( "pre" ) &&
            $el.classList.contains( "opacity" ) );
    },

    set( $trigger, $target, $tab, className ) {
        if ( !this.status( $trigger ) ) {
            this.remove( $target );
            this.add( $trigger );
        }
        $tab.classList.add( className );
    },
};

/*
* Toggle Tab Components
*/
const toggleTabs = () => {
    const $tabs = document.getElementsByClassName( "tabs" );
    const $schedule = document.getElementById( "comp-schedule" );
    const $availability = document.getElementById( "comp-available" );
    const $individual = document.getElementById( "comp-individual" );
    const $community = document.getElementById( "comp-community" );

    Array.prototype.forEach.call( $tabs, ( $tab ) => {
        $tab.addEventListener( "click", ( e ) => {
            e.preventDefault();
            toggleEl.removeAll( $tabs, "tabbed" );
            if ( $tab.classList.contains( "schedule-link" ) ) {
                toggleEl.set( $schedule, $availability, $tab, "tabbed" );
            } else if ( $tab.classList.contains( "available-link" ) ) {
                toggleEl.set( $availability, $schedule, $tab, "tabbed" );
            } else if ( $tab.classList.contains( "individual-link" ) ) {
                toggleEl.set( $individual, $community, $tab, "tabbed" );
            } else if ( $tab.classList.contains( "community-link" ) ) {
                toggleEl.set( $community, $individual, $tab, "tabbed" );
            }
        } );
    } );
};
