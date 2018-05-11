/* eslint-disable no-unused-vars */
/* global delay */
/* global findChildClass */
/* global addEvents */
/* global hamburger */

/**
*
* LOADING ANIMATIONS JS
*
*/

/*
* Add Fade
*/
const addFade = ( $el ) => {
    $el.classList.add( "fade" );
};

/*
* Remove Fade
*/
const removeFade = ( $el ) => {
    $el.classList.remove( "fade" );
};

/*
* Document Fade
*/
const documentFade = () => {
    const $body = document.getElementsByTagName( "BODY" )[ 0 ];
    addFade( $body );
};

/*
* Header Fade
*/
const headerFade = () => {
    const $head = document.getElementById( "head" );
    Array.prototype.forEach.call( $head.childNodes, ( $flank ) => {
        if ( $flank.tagName === "DIV" ) {
            if ( $flank.classList.contains( "left" ) ) {
                addFade( $flank );
            } else if ( $flank.classList.contains( "right" ) ) {
                findChildClass( $flank, "tele", ( $item ) => {
                    addFade( $item );
                } );
                findChildClass( $flank, "social", ( $social ) => {
                    findChildClass( $social, "item", ( $item, indx ) => {
                        delay( addFade.bind( null, $item ), 150 * indx );
                    } );
                } );
            }
        }
    } );
};

/*
* Block Fade
*/
const blockFade = ( dist = 1 ) => {
    const $blocks = document.getElementsByClassName( "blocks" )[ 0 ];
    let blockCount = 0;
    findChildClass( $blocks, "block", ( $block ) => {
        const blockTop = $block.getBoundingClientRect().top;
        if ( blockCount === 0 ) {
            addFade( $block );
        } else if ( blockTop - dist < 0 ) {
            addFade( $block );
        }
        blockCount += 1;
    } );
};

/*
* Signup Fade
*/
const signupFade = ( dist = 1 ) => {
    const $signup = document.getElementsByClassName( "signup" )[ 0 ];
    const blockTop = $signup.getBoundingClientRect().top;
    if ( blockTop - dist < 0 ) {
        addFade( $signup );
    }
};

/*
* Footer Fade
*/
const footerFade = ( dist = 1 ) => {
    const $foot = document.getElementById( "foot" );
    findChildClass( $foot, "main", ( $main ) => {
        const $divs = Array.prototype.filter.call( $main.childNodes, $flank =>
            $flank.tagName === "DIV" );
        $divs.forEach( ( $div ) => {
            Array.prototype.forEach.call( $div.childNodes, ( $el, indx ) => {
                if ( $el.tagName === "DIV" ) {
                    const blockTop = $el.getBoundingClientRect().top;
                    if ( blockTop - dist < 0 ) {
                        delay( addFade.bind( null, $el ), 250 * ( 1 + indx ) );
                    }
                }
            } );
        } );
    } );
};

/*
* Menu Fade
*/
const menuFade = ( callback ) => {
    const $menu = document.getElementById( "menu" );
    findChildClass( $menu, "menu-wrapper", ( $wrapper ) => {
        findChildClass( $wrapper, "items", ( $items ) => {
            findChildClass( $items, "link-wrapper", ( $link, indx ) => {
                callback( $link, indx );
            } );
        } );
    } );
};

/*
* Nav Event
*/
const navEvent = () => {
    const $body = document.getElementsByTagName( "BODY" )[ 0 ];
    addEvents.toID( {
        trigger: "ham",
        target: "head",
        callback: ( $trigger, $target ) => {
            if ( !$target.classList.contains( "toggle" ) ) {
                $target.classList.add( "pre" );
                $body.classList.add( "lock" );
                $target.classList.add( "toggle" );
                hamburger.open();
                menuFade( ( $link, indx ) => {
                    const time = 100 * ( 1 + indx );
                    delay( addFade.bind( null, $link ), time );
                } );
            } else {
                hamburger.close();
                $target.classList.remove( "toggle" );
                $body.classList.remove( "lock" );
                delay( () => $target.classList.remove( "pre" ) );
                menuFade( ( $link ) => {
                    removeFade( $link );
                } );
            }
        },
    } );
};
