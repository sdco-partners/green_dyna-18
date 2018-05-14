/* global triggerScrollOnLoad */
/* global Gallery */
/* global initLightbox */
/* global toggleTabs */
/* global documentFade */
/* global headerFade */
/* global navEvent */
/* global blockFade */
/* global signupFade */
/* global footerFade */
/* global initParallax */
/* global initSearchComp */

/**
*
* COMPONENT JS
*
*/

/*
* Document Ready
*/

document.onreadystatechange = () => {
    if ( document.readyState === "complete" ) {
        // Trigger Scroll
        triggerScrollOnLoad();

        // Fades
        documentFade();
        headerFade();

        // Gallery & Images
        Gallery.build();
        initLightbox();

        // Nav Logic
        navEvent();
        toggleTabs();

        // Search Logic
        initSearchComp();

        /*
        * Window OnScroll
        */
        window.onscroll = () => {
            // Trigger Vars
            const height = ( window.innerHeight ) ?
                window.innerHeight :
                document.documentElement.clientHeight;
            const trigger = height - ( height / 4 );

            // Fades Triggered On Scroll
            blockFade( trigger );
            signupFade( trigger );
            footerFade( height );

            // Parallax
            initParallax( {
                plane: "overlay",
                speed: 50,
            } );
        };
    }
};
