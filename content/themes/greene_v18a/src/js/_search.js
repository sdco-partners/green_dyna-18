/* eslint-disable no-unused-vars */
/* global findChildClass */
/* global addEvents */
/* global ajaxRequester */
/* global getFloorPlanIDs */
/* global dataPopulator */
/* global mapData */
/* global resetAvailability */

/*
* Unpin All Floor Option
*/
const unpinAllFloorOptions = ( $siblings ) => {
    Array.prototype.forEach.call( $siblings, ( $sib ) => {
        if ( $sib.tagName === "polygon" ) {
            $sib.classList.remove( "pin" );
        }
    } );
};

/*
* Pin Floor Option
*/
const pinFloorOption = ( $el, $siblings ) => {
    unpinAllFloorOptions( $siblings );
    if ( $el.tagName === "polygon" ) {
        $el.classList.add( "pin" );
    }
};

/*
* Unpin All Option
*/
const unpinAllOptions = ( $siblings ) => {
    findChildClass( $siblings, "option", ( $sib ) => {
        if ( $sib.tagName === "DIV" ) {
            $sib.classList.remove( "pin" );
        }
    } );
};

/*
* Pin Option
*/
const pinOption = ( $el, $siblings ) => {
    unpinAllOptions( $siblings );
    if ( $el.tagName === "DIV" ) {
        $el.classList.add( "pin" );
    }
};

/*
* Select Bed Options
*/
const selectBedOptions = ( $search, callback ) => {
    findChildClass( $search, "bedrooms", ( $bedrooms ) => {
        findChildClass( $bedrooms, "option", ( $option ) => {
            callback( $option, $bedrooms );
        } );
    } );
};

/*
* Scrub Bedroom Options
*/
const scrubBedOptions = ( $wrapper, callback ) => {
    findChildClass( $wrapper, "pin", ( $pin ) => {
        callback( $pin );
    } );
};

/*
* Scrub Floor Options
*/
const scrubFloorOptions = ( callback ) => {
    const $floor = document.getElementsByClassName( "fplevel" );
    Array.prototype.forEach.call( $floor, ( $poly ) => {
        if ( $poly.classList.contains( "pin" ) ) {
            callback( $poly );
        }
    } );
};

/*
* Scrub Col Options
*/
const scrubColOptions = ( $wrapper, callback ) => {
    findChildClass( $wrapper, "expandable", ( $expandable ) => {
        findChildClass( $expandable, "col", ( $col ) => {
            findChildClass( $col, "option", ( $option ) => {
                const field = $option.classList[ 1 ];
                Array.prototype.forEach.call( $option.childNodes, ( $span ) => {
                    if ( $span.tagName === "SPAN" ) {
                        if ( $span.classList.contains( "min-range" ) ||
                            $span.classList.contains( "max-range" ) ) {
                            const type = ( $span.classList.contains( "min-range" ) ) ?
                                `${ field }-min` :
                                `${ field }-max`;
                            Array.prototype.forEach.call( $span.childNodes, ( $select ) => {
                                if ( $select.tagName === "SELECT" ) {
                                    callback( $select.options[ $select.selectedIndex ], type );
                                }
                            } );
                        }
                    }
                } );
            } );
        } );
    } );
};

/*
* Process Bedroom Filter
*/
const processFloorFilters = ( $option ) => {
    const filterOptions = {};
    switch ( $option.getAttribute( "id" ) ) {
    case "fp-first":
        filterOptions.FloorNumber = 1;
        break;
    case "fp-second":
        filterOptions.FloorNumber = 2;
        break;
    case "fp-third":
        filterOptions.FloorNumber = 3;
        break;
    case "fp-fourth":
        filterOptions.FloorNumber = 4;
        break;
    case "fp-fifth":
        filterOptions.FloorNumber = 5;
        break;
    case "fp-sixth":
        filterOptions.FloorNumber = 6;
        break;
    default:
        filterOptions.FloorNumber = "VIEW ALL";
    }
    return filterOptions;
};

/*
* Process Bedroom Filter
*/
const processBedFilters = ( $option ) => {
    const filterOptions = {};
    switch ( $option.getAttribute( "id" ) ) {
    case "opt-studio":
        filterOptions.Bedrooms = 0;
        break;
    case "opt-one-bedroom":
        filterOptions.Bedrooms = 1;
        break;
    case "opt-two-bedroom":
        filterOptions.Bedrooms = 2;
        break;
    case "opt-three-bedroom":
        filterOptions.Bedrooms = 3;
        break;
    default:
        filterOptions.Bedrooms = "VIEW ALL";
    }
    return filterOptions;
};

/*
* Process Range Filter
*/
const processRangeFilters = ( selected, type ) => {
    const filterOptions = {};
    switch ( type ) {
    case "rent-range-max":
        filterOptions.maxPrice = parseInt( selected, 10 );
        break;
    case "rent-range-min":
        filterOptions.minPrice = parseInt( selected, 10 );
        break;
    case "square-footage-range-max":
        filterOptions.maxSQFT = parseInt( selected, 10 );
        break;
    case "square-footage-range-min":
        filterOptions.minSQFT = parseInt( selected, 10 );
        break;
    default:
        filterOptions.unknown = "Unknown Filter Type!";
    }
    return filterOptions;
};

/*
* Process Full List Search
*/
const processFullListSearch = ( $options, callback ) => {
    Array.prototype.forEach.call( $options.childNodes, ( $wrapper ) => {
        if ( $wrapper.tagName === "DIV" ) {
            if ( $wrapper.classList.contains( "bedrooms" ) ) {
                scrubBedOptions( $wrapper, ( option ) => {
                    const processed = processBedFilters( option );
                    callback( processed );
                } );
            } else if ( $wrapper.classList.contains( "advanced" ) ) {
                scrubColOptions( $wrapper, ( option, type ) => {
                    const processed = processRangeFilters( option.textContent, type );
                    callback( processed );
                } );
            }
        }
    } );
};

/*
* Process Community Search
*/
const proccesCommunitySearch = ( callback ) => {
    scrubFloorOptions( ( $option ) => {
        const processed = processFloorFilters( $option );
        callback( processed );
    } );
};

/*
* Send Search Request
*/
const sendSearchRequest = ( params, type ) => {
    getFloorPlanIDs( ( $id ) => {
        ajaxRequester( $id, ( data ) => {
            const thisData = JSON.parse( data );
            dataPopulator( thisData, type, params );
        } );
    } );
};

/*
* Search Logic
*/
const searchLogic = ( $options, fullSearch = false ) => {
    const params = [];
    const $community = document.getElementsByClassName( "community-link" )[ 0 ];
    const communityIsToggled = $community.classList.contains( "tabbed" );
    const type = ( communityIsToggled ) ? "community" : "single";
    if ( fullSearch ) {
        processFullListSearch( $options, ( processed ) => {
            params.push( processed );
        } );
        if ( communityIsToggled ) {
            proccesCommunitySearch( ( processed ) => {
                params.push( processed );
            } );
        }
    } else {
        params.push( processBedFilters( $options ) );
        if ( communityIsToggled ) {
            proccesCommunitySearch( ( processed ) => {
                params.push( processed );
            } );
        }
    }
    mapData.reset();
    resetAvailability();
    sendSearchRequest( params, type );
};

/*
* Trigger Bedroom Events
*/
const triggerBedroomEvents = ( $search ) => {
    selectBedOptions( $search, ( $option, $bedrooms ) => {
        $option.addEventListener( "click", ( e ) => {
            e.preventDefault();
            const $expandable = document.getElementById( "expandable" );
            pinOption( $option, $bedrooms );
            if ( !$expandable.classList.contains( "expand" ) ) {
                searchLogic( $option );
            }
        } );
    } );
};

/*
* Set Floor Number
*/
const setFloorNumber = ( level ) => {
    let floorNumber = "Floor ";
    switch ( level ) {
    case "fp-sixth":
        floorNumber += "6";
        break;
    case "fp-fifth":
        floorNumber += "5";
        break;
    case "fp-fourth":
        floorNumber += "4";
        break;
    case "fp-third":
        floorNumber += "3";
        break;
    case "fp-second":
        floorNumber += "2";
        break;
    case "fp-first":
        floorNumber += "1";
        break;
    default:
        floorNumber = "Choose A Floor";
    }
    const $currentFloor = document.getElementById( "currentFloor" );
    $currentFloor.textContent = floorNumber;
};

/*
* Trigger Floor Events
*/
const triggerFloorEvents = () => {
    const $floor = document.getElementsByClassName( "fplevel" );
    Array.prototype.forEach.call( $floor, ( $level ) => {
        $level.addEventListener( "click", ( e ) => {
            e.preventDefault();
            const $expandable = document.getElementById( "expandable" );
            pinFloorOption( $level, $floor );
            setFloorNumber( $level.getAttribute( "id" ) );
            if ( !$expandable.classList.contains( "expand" ) ) {
                searchLogic( $level );
            }
        } );
    } );
};

/*
* Select Col Options
*/
const selectColOptions = ( $comp, col, range, callback ) => {
    findChildClass( $comp, col, ( $col ) => {
        findChildClass( $col, range, ( $range ) => {
            Array.prototype.forEach.call( $range.childNodes, ( $el ) => {
                if ( $el.tagName === "SPAN" ) {
                    callback( $el );
                }
            } );
        } );
    } );
};

/*
* Select DropDowns Options
*/
const selectDropdownOptions = ( $search, callback ) => {
    findChildClass( $search, "advanced", ( $advanced ) => {
        findChildClass( $advanced, "expandable", ( $expandable ) => {
            selectColOptions( $expandable, "left", "rent-range", ( $field ) => {
                callback( $field );
            } );
            selectColOptions( $expandable, "right", "square-footage-range", ( $field ) => {
                callback( $field );
            } );
        } );
    } );
};

/*
* Fetch Select Data
*/
const fetchSelectData = ( $field ) => {
    const data = {};
    Array.prototype.forEach.call( $field.childNodes, ( $select ) => {
        if ( $select.tagName === "SELECT" ) {
            data[ $field.className ] = $select[ $select.selectedIndex ].text;
        }
    } );
    return data;
};

/*
* Reset Select Data
*/
const resetSelectData = ( $field ) => {
    const $viewAll = document.getElementById( "opt-view-all" );
    Array.prototype.forEach.call( $field.childNodes, ( $select ) => {
        if ( $select.tagName === "SELECT" ) {
            const $resetSelect = $select;
            $resetSelect.selectedIndex = 0;
            $viewAll.classList.add( "pin" );
        }
    } );
};

/*
* Filter Expand
*/
const expandOptions = () => {
    addEvents.toID( {
        trigger: "advancedoptions",
        target: "expandable",
        callback: ( $trigger, $target ) => {
            $target.classList.toggle( "expand" );
        },
    } );
};

/*
* Reset Options
*/
const resetOptions = ( $search ) => {
    addEvents.toClass( {
        trigger: "reset",
        callback: () => {
            findChildClass( $search, "bedrooms", ( $bedrooms ) => {
                unpinAllOptions( $bedrooms );
            } );
            selectDropdownOptions( $search, ( $field ) => {
                resetSelectData( $field );
            } );
        },
    } );
};

/*
* Init Search Comp
*/
const initSearchComp = () => {
    const $search = document.getElementById( "search" );
    if ( $search ) {
        // Pin default Option
        const $viewAll = document.getElementById( "opt-view-all" );
        const $firstFloor = document.getElementById( "fp-first" );
        $viewAll.classList.add( "pin" );
        $firstFloor.classList.add( "pin" );

        // Search listeners
        triggerBedroomEvents( $search );
        triggerFloorEvents();

        // Reset
        resetOptions( $search );

        // Expand Advanced Options
        expandOptions();

        // Process
        const $submit = document.getElementById( "submit" );
        $submit.addEventListener( "click", ( e ) => {
            e.preventDefault();
            searchLogic( $search, true );
        } );
    }
};
