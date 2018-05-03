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
        this.assemblePos();
        this.calculateInterval();
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
                    this.slides = this.assembleSlides();
                    this.length = this.slides.length;
                    this.indx = 0;
                } else if ( classes.contains( "prev" ) ) {
                    this.$bttnPrev = $el;
                } else if ( classes.contains( "next" ) ) {
                    this.$bttnNext = $el;
                }
            }
        } );
    }

    setEventListeners() {
        this.$bttnPrev.addEventListener( "click", ( e ) => {
            e.preventDefault();
            this.changeSlide( "left" );
        } );

        this.$bttnNext.addEventListener( "click", ( e ) => {
            e.preventDefault();
            this.changeSlide( "right" );
        } );
    }

    assemblePos() {
        const nextIndx = this.findNextSlideIndx();
        const nextSlide = this.slides[ nextIndx ];
        console.log( "next slide", nextSlide );
        this.nextPos = nextSlide.getBoundingClientRect().left;
    }

    assembleSlides() {
        const children = this.$gallery.childNodes;
        return Array.prototype.filter.call( children, $child =>
            $child.tagName === "DIV" );
    }

    findNextSlideIndx() {
        return ( this.indx + 1 <= this.length - 1 ) ?
            this.indx + 1 :
            0;
    }

    calculateInterval() {
        const box = this.$gallery.getBoundingClientRect();
        this.offset = ( box.left - box.width );
        this.interval = ( this.nextPos - this.offset - this.$gallery.scrollLeft ) / 20;
    }

    moveForward( time = 0.1 ) {
        console.log( "forward triggered", this.nextPos );
        if ( this.$gallery.scrollLeft + this.interval < this.nextPos - this.offset ) {
            this.$gallery.scrollLeft += this.interval;
            this.indx += 1;
            setTimeout( this.moveForward.bind( this, time + 0.1 ), 18 );
        } else {
            this.$gallery.scrollLeft = this.nextPos - this.offset;
            this.nextPos = this.assemblePos();
        }
    }

    moveBackward() {
        console.log( "this is never used", this.galleryWidth );
    }

    changeSlide( direction ) {
        switch ( direction ) {
        case "left":
            this.setPause();
            this.moveBackward();
            break;
        case "right":
            this.setPause();
            this.moveForward();
            break;
        default:
            this.changeSlide();
        }
    }

    checkLength() {
        if ( this.$gallery.scrollLeft < 0 ) {
            this.$gallery.scrollLeft = this.galleryWidth;
        } else if ( this.$gallery.scrollLeft > this.galleryWidth ) {
            this.$gallery.scrollLeft = 0;
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
            this.next();
            this.changeSlide();
            this.resetTime();
        } else if ( !this.pause ) {
            this.spendTime();
        }
        setTimeout( this.countDown.bind( this ), 1000 );
    }

    default() {
        this.$gallery.addEventListener( "scroll", () => {
            console.log( "XX-->", this.$gallery.scrollLeft );
        } );
    }
}

/*
* Initiate Slider
*/
const initSlider = () => {
    const id = 0;
    const galleryObj = {};
    const $galleries = document.getElementsByClassName( "gallery-wrapper" );
    Array.prototype.forEach.call( $galleries, ( $gallery ) => {
        galleryObj[ `gal-${ id }` ] = new SlideShow( {
            target: $gallery,
        } );
        // galleryObj[ `gal-${ id }` ].start();
        galleryObj[ `gal-${ id }` ].default();
    } );
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

/**
* Document Ready
*/
document.onreadystatechange = () => {
    if ( document.readyState === "complete" ) {
        navEvent();
        initSlider();
        toggleTabs();
    }
};
