/* eslint-disable no-unused-vars */
/* global findChildClass */
/* global addEvents */

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
* Process Search
*/
const processSearch = ( $search ) => {
    const data = [];
    selectDropdownOptions( $search, ( $field ) => {
        data.push( fetchSelectData( $field ) );
    } );
    findChildClass( $search, "bedrooms", ( $bedrooms ) => {
        data.push( findPins( $bedrooms ) );
    } );
    return data;
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
        selectBedOptions( $search, ( $option, $bedrooms ) => {
            $option.addEventListener( "click", ( e ) => {
                e.preventDefault();
                pinOption( $option, $bedrooms );
            } );
        } );

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
