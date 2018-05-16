/* eslint-disable no-unused-vars */
/* global findChildClass */
/* global addEvents */
/* global ajaxRequester */
/* global getFloorPlanIDs */
/* global singleFloorplanPopulator */

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
* Find Pins
*/
const findPins = ( $siblings ) => {
    const data = {};
    findChildClass( $siblings, "option", ( $sib ) => {
        if ( $sib.tagName === "DIV" ) {
            if ( $sib.classList.contains( "pin" ) ) {
                const thisSpan = Array.prototype.filter.call( $sib.childNodes, $el =>
                    $el.tagName === "SPAN" );
                data.bedrooms = thisSpan[ 0 ].innerText;
            }
        }
    } );
    return data;
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
* Process Bedroom Filter
*/
const processBedFilters = ( $option ) => {
    const params = [];
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
    params.push( filterOptions );
    return params;
};

/*
* Process Search
*/
const processSearch = ( $options, fullSearch = false ) => {
    const params = ( !fullSearch ) ?
        processBedFilters( $options ) :
        null;
    getFloorPlanIDs( ( $id ) => {
        ajaxRequester( $id, ( data ) => {
            const thisData = JSON.parse( data );
            singleFloorplanPopulator( thisData, params );
        } );
    } );
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
                processSearch( $option );
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
    Array.prototype.forEach.call( $field.childNodes, ( $select ) => {
        if ( $select.tagName === "SELECT" ) {
            const $resetSelect = $select;
            $resetSelect.selectedIndex = 0;
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
    // Bedroom Listeners
    const $search = document.getElementById( "search" );
    if ( $search ) {
        // Pin default Option
        const $viewAll = document.getElementById( "opt-view-all" );
        $viewAll.classList.add( "pin" );

        // Bed listeners
        triggerBedroomEvents( $search );

        // Reset
        resetOptions( $search );

        // Expand Advanced Options
        expandOptions();

        // Process
        const $submit = document.getElementById( "submit" );
        $submit.addEventListener( "click", ( e ) => {
            e.preventDefault();
            console.log( processSearch( $search ) );
        } );
    }
};
