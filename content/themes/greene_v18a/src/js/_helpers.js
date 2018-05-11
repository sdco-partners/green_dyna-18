/* eslint-disable no-unused-vars */

/**
*
* HELPERS JS
*
*/

/*
* TriggerScrollOnLoad
*/
const triggerScrollOnLoad = () => {
    const scrollTo = window.scrollY + 2;
    window.scroll( {
        top: scrollTo,
        behavior: "smooth",
    } );
};

/*
* AddEvents Constructor
*/
const addEvents = {
    toClass( {
        trigger,
        target = null,
        type = "click",
        callback,
    } = {} ) {
        const $trigger = document.getElementsByClassName( trigger );
        if ( $trigger && $trigger.length > 0 ) {
            Array.prototype.forEach.call( $trigger, ( $el ) => {
                $el.addEventListener( type, ( e ) => {
                    e.preventDefault();
                    const $target = document.getElementById( target );
                    callback( $trigger, $target );
                } );
            } );
        }
    },
    toID( {
        trigger,
        target = null,
        type = "click",
        callback,
    } = {} ) {
        const $trigger = document.getElementById( trigger );
        if ( $trigger ) {
            $trigger.addEventListener( type, ( e ) => {
                e.preventDefault();
                const $target = document.getElementById( target );
                callback( $trigger, $target );
            } );
        }
    },
};

/*
* delay
*/
const delay = ( callback, time = 250 ) => {
    setTimeout( () => {
        callback();
    }, time );
};

/*
* findChildClass
*/
const findChildClass = ( $el, className, callback ) => {
    if ( $el && $el.childNodes ) {
        Array.prototype.forEach.call( $el.childNodes, ( $item, indx ) => {
            if ( $item.tagName === "DIV" ) {
                if ( $item.classList.contains( className ) ) {
                    callback( $item, indx );
                }
            }
        } );
    }
    return null;
};

/*
* String Replace
*/
const stringReplace = ( string, target, replace ) => {
    let newString = string;
    if ( string.indexOf( target ) >= 0 ) {
        newString = newString.substring( 0, string.indexOf( target ) );
        newString += `${ target }${ replace }`;
    }
    return newString;
};
