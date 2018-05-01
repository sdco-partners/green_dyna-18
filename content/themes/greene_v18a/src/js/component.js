/**
*
* Component JS
*
*/

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

/**
* delay
*/
const delay = ( callback, time = 250 ) => {
    setTimeout( () => {
        callback();
    }, time );
};

/**
* Begin SVG Animate
*/
const SVGAnimate = ( svgIds ) => {
    if ( svgIds ) {
        svgIds.forEach( ( id ) => {
            const $id = document.getElementById( id );
            $id.beginElement();
        } );
    }
};

/**
* Toggle Hamburger
*/
const hamburger = {
    open() {
        SVGAnimate( [
            "hambar-open-1t",
            "hambar-open-2t",
            "hambar-open-3t",
            "hambar-open-4t",
            "hambar-open-1b",
            "hambar-open-2b",
            "hambar-open-3b",
            "hambar-open-4b",
        ] );
    },
    close() {
        SVGAnimate( [
            "hambar-close-1t",
            "hambar-close-2t",
            "hambar-close-3t",
            "hambar-close-4t",
            "hambar-close-1b",
            "hambar-close-2b",
            "hambar-close-3b",
            "hambar-close-4b",
        ] );
    },
};
/**
* Nav Event
*/
const navEvent = () => {
    addEvents.toID( {
        trigger: "ham",
        target: "head",
        callback: ( $trigger, $target ) => {
            if ( !$target.classList.contains( "toggle" ) ) {
                $target.classList.toggle( "pre" );
                $target.classList.toggle( "toggle" );
                hamburger.open();
            } else {
                hamburger.close();
                $target.classList.toggle( "toggle" );
                delay( () => $target.classList.toggle( "pre" ) );
            }
        },
    } );
};

/**
* Document Ready
*/
document.onreadystatechange = () => {
    if ( document.readyState === "complete" ) {
        navEvent();
    }
};
