/* eslint-disable no-unused-vars */
/* global delay */

/**
*
* SLIDESHOW JS
*
*/

/*
* SlideShow Class
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
