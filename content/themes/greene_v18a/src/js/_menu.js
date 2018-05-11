/* eslint-disable no-unused-vars */

/**
*
* MENU JS
*
*/

/*
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

/*
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
