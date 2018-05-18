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
/* global fetchData */
/* global modulePosition */

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

        // ReST API Logic
        fetchData();

        // Module
        modulePosition();

        // Page Load Triggers
        const $body = document.getElementsByTagName( "BODY" )[ 0 ];
        if ( $body.classList.contains( "single-floorplan" ) ) {
            const $tab = document.getElementsByClassName( "schedule" )[ 0 ];
            $tab.click();
        } else if ( $body.classList.contains( "post-type-archive-floorplan" ) ) {
            const $tab = document.getElementById( "view-map" );
            $tab.click();
        }

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
