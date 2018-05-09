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
            } else {
                hamburger.close();
                $target.classList.remove( "toggle" );
                $body.classList.remove( "lock" );
                delay( () => $target.classList.remove( "pre" ) );
            }
        },
    } );
};

/*
* slideShow
*/
class SlideShow {
    constructor( {
        target,
        timer = 6000,
        pause = false,
        currentIndx = 0,
    } ) {
        Object.assign( this, {
            timer,
            pause,
            currentIndx,
        } );
        this.$galleryWrapper = target;
        this.assembleDOMElements();
        this.setEventListeners();
        this.disableBttns();
    }

    start() {
        this.countDown();
    }

    assembleDOMElements() {
        const children = this.$galleryWrapper.childNodes;
        Array.prototype.forEach.call( children, ( $el ) => {
            const classes = $el.classList;
            if ( $el.tagName === "DIV" ) {
                if ( classes.contains( "gallery" ) ) {
                    this.$gallery = $el;
                    this.max = this.$gallery.scrollWidth;
                    this.slides = this.assembleSlides();
                    this.length = this.slides.length;
                    this.indx = 0;
                    this.addClasses( {
                        className: "next",
                    } );
                } else if ( classes.contains( "prev" ) ) {
                    this.$bttnPrev = $el;
                } else if ( classes.contains( "next" ) ) {
                    this.$bttnNext = $el;
                }
            }
        } );
    }

    assembleSlides() {
        return Array.prototype.filter.call( this.$gallery.childNodes, $child =>
            $child.tagName === "DIV" );
    }

    addClasses( {
        className,
        $target = this.slides,
        exclude = 0,
    } ) {
        Array.prototype.forEach.call( $target, ( $el, indx ) => {
            if ( indx !== exclude ) {
                $el.classList.add( className );
            }
        } );
    }

    resetClasses() {
        Array.prototype.forEach.call( this.slides, ( $el, indx, array ) => {
            if ( indx === array.length - 1 ) {
                $el.classList.add( "next" );
            } else {
                this.resetSlide( $el );
            }
        } );
    }

    reorderSlides() {
        Array.prototype.forEach.call( this.slides, ( $slide, indx ) => {
            if ( indx === this.indx ) {
                $slide.classList.remove( "prev" );
                $slide.classList.remove( "next" );
            } else if ( indx < this.indx ) {
                $slide.classList.add( "prev" );
                $slide.classList.remove( "next" );
            } else if ( indx > this.indx ) {
                $slide.classList.add( "next" );
                $slide.classList.remove( "prev" );
            }
        } );
    }

    resetSlide( $el = this.slides[ this.indx ] ) {
        $el.classList.remove( "next" );
        $el.classList.remove( "prev" );
    }

    setEventListeners() {
        this.$bttnPrev.addEventListener( "click", ( e ) => {
            e.preventDefault();
            if ( this.indx !== 0 ) {
                this.changeSlide( "left" );
                this.setPause();
            }
        } );

        this.$bttnNext.addEventListener( "click", ( e ) => {
            e.preventDefault();
            if ( this.indx !== this.length - 1 ) {
                this.changeSlide( "right" );
                this.setPause();
            }
        } );
    }

    moveForward( indx = this.indx ) {
        this.slides[ indx ].classList.add( "prev" );
        this.increment();
        this.resetSlide();
        this.disableBttns();
    }

    moveBackward( indx = this.indx ) {
        this.slides[ indx ].classList.add( "next" );
        this.decrement();
        this.resetSlide();
        this.disableBttns();
    }

    increment() {
        this.indx += 1;
    }

    decrement() {
        this.indx -= 1;
    }

    disableBttns() {
        if ( this.indx === 0 ) {
            this.$bttnPrev.classList.add( "disable" );
        } else {
            this.$bttnPrev.classList.remove( "disable" );
        }
        if ( this.indx === this.length - 1 ) {
            this.$bttnNext.classList.add( "disable" );
        } else {
            this.$bttnNext.classList.remove( "disable" );
        }
    }

    changeSlide( direction ) {
        switch ( direction ) {
        case "left":
            this.moveBackward();
            break;
        case "right":
            this.moveForward();
            break;
        default:
            this.changeSlide();
        }
    }

    setPause( pauseTime = 6000 ) {
        if ( !this.pause ) {
            this.pause = true;
            setTimeout( () => {
                this.pause = false;
            }, pauseTime );
        }
    }

    resetTime( time = 6000 ) {
        this.timer = time;
    }

    spendTime() {
        this.timer -= 1000;
    }

    countDown() {
        if ( this.timer === 0 ) {
            if ( this.indx < this.length - 1 ) {
                this.changeSlide( "right" );
            } else {
                this.resetClasses();
                this.indx = 0;
                this.disableBttns();
                delay( () => {
                    this.addClasses( {
                        className: "next",
                    } );
                }, 1000 );
            }
            this.resetTime();
        } else if ( !this.pause ) {
            this.spendTime();
        }
        setTimeout( this.countDown.bind( this ), 1000 );
    }
}

/*
* Gallery
*/
const Gallery = {
    galleryObj: {},

    build() {
        const $galleries = document.getElementsByClassName( "gallery-wrapper" );
        const $body = document.getElementsByTagName( "BODY" )[ 0 ];
        Array.prototype.forEach.call( $galleries, ( $gallery, indx ) => {
            this.galleryObj[ `gal-${ indx }` ] = new SlideShow( {
                target: $gallery,
            } );
        } );
        if ( $body.classList.contains( "home" ) ) {
            this.galleryObj[ "gal-0" ].start();
        }
    },

    setIndx( gal, indx ) {
        this.galleryObj[ gal ].indx = indx - 1;
        this.galleryObj[ gal ].moveForward( indx );
        this.galleryObj[ gal ].reorderSlides();
    },
};

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

/*
* Extract Indx
*/
const extractIndx = $el =>
    parseInt( $el.id.split( "-" )[ 1 ], 10 );

/*
* Slides Fadeout
*/
const slidesFadeout = ( $slides ) => {
    Array.prototype.forEach.call( $slides, ( $single ) => {
        if ( $single.tagName === "DIV" ) {
            $single.classList.add( "fadeout" );
            delay( () => $single.classList.remove( "fadeout" ), 1000 );
        }
    } );
};

/*
* GallerySlidesLogic
*/
const gallerySlidesLogic = ( $slides, $box ) => {
    Array.prototype.forEach.call( $slides, ( $slide ) => {
        if ( $slide.tagName === "DIV" ) {
            $slide.addEventListener( "click", ( e ) => {
                e.preventDefault();
                Gallery.setIndx( "gal-0", extractIndx( $slide ) );
                if ( !$box.classList.contains( "on" ) ) {
                    $box.classList.add( "fadout" );
                    delay( () => {
                        $box.classList.remove( "fadout" );
                        $box.classList.add( "on" );
                    }, 250 );
                    slidesFadeout( $slides );
                }
            } );
        }
    } );
};

/*
* CloseBttnLogic
*/
const closeBttnLogic = ( $child, $slides, $gallery, $box ) => {
    $child.addEventListener( "click", ( e ) => {
        e.preventDefault();
        if ( $box.classList.contains( "on" ) ) {
            slidesFadeout( $slides );
            delay( () => $box.classList.remove( "on" ), 250 );
        }
    } );
};

/*
* Init Lightbox
*/
const initLightbox = () => {
    const $lightbox = document.getElementsByClassName( "lightbox" );
    let $gallery = null;
    let $slides = null;
    Array.prototype.forEach.call( $lightbox, ( $box ) => {
        const $children = $box.childNodes;
        Array.prototype.forEach.call( $children, ( $child ) => {
            if ( $child.tagName === "DIV" ) {
                const classes = $child.classList;
                if ( classes.contains( "gallery" ) ) {
                    $gallery = $child;
                    $slides = $child.childNodes;
                    gallerySlidesLogic( $slides, $box );
                } else if ( classes.contains( "close" ) ) {
                    closeBttnLogic( $child, $slides, $gallery, $box );
                }
            }
        } );
    } );
};
/*
* Add Fade
*/
const addFade = ( $el ) => {
    $el.classList.add( "fade" );
};

/*
* findChildClass
*/
const findChildClass = ( $el, className, callback ) => {
    Array.prototype.forEach.call( $el.childNodes, ( $item, indx ) => {
        if ( $item.tagName === "DIV" ) {
            if ( $item.classList.contains( className ) ) {
                callback( $item, indx );
            }
        }
    } );
    return null;
};

/*
* Document Fade
*/
const documentFade = () => {
    const $body = document.getElementsByTagName( "BODY" )[ 0 ];
    addFade( $body );
};

/*
* Document Fade
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
* Document Ready
*/
document.onreadystatechange = () => {
    if ( document.readyState === "complete" ) {
        // Fades
        documentFade();
        headerFade();
        // Gallery & Images
        Gallery.build();
        initLightbox();
        // Nav Logic
        navEvent();
        toggleTabs();
    }
};
