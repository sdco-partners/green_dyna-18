/* eslint-disable no-unused-vars */
/* global delay */
/* global findChildClass */

/**
*
* ReST JS
*
*/

/*
* Range
*/
class DataRanges {
    constructor() {
        this.count = 0;
    }

    add( key, value ) {
        this.addNewKey( key, value );
        this.checkMin( key, value );
        this.checkMax( key, value );
    }

    addNewFloorName( value ) {
        this.name = value;
    }

    addNewKey( key, value ) {
        if ( !this[ key ] ) {
            this[ key ] = {};
            this[ key ].min = value;
            this[ key ].max = value;
        }
    }

    checkMin( key, value ) {
        if ( this[ key ].min > value ) {
            this[ key ].min = value;
        }
    }

    checkMax( key, value ) {
        if ( this[ key ].max < value ) {
            this[ key ].max = value;
        }
    }

    increment() {
        this.count += 1;
    }

    reset() {
        Object.keys( this ).forEach( ( key ) => {
            if ( this[ key ].min ) {
                delete this[ key ];
            }
        } );
    }
}

/*
* Filter Data
*/
const filterData = ( filter, data ) => {
    if ( filter === false ) {
        return true;
    }
    return false;
};

/*
* Build Data Ranges
*/
const buildDataRanges = ( data, filter = false ) => {
    const units = data.AvailableUnits;
    const thisRange = new DataRanges();
    Object.keys( units ).forEach( ( row ) => {
        Object.keys( units[ row ] ).forEach( ( key ) => {
            thisRange.increment();
            if ( key === "Name" && !thisRange.name ) {
                thisRange.addNewFloorName( units[ row ][ key ] );
            } else if ( typeof ( units[ row ][ key ] ) === "number" ) {
                thisRange.add( key, units[ row ][ key ] );
            }
        } );
    } );
    return thisRange;
};

/*
* Data Assembly
*/
const dataAssembly = {
    bed( range ) {
        const bedroomType = ( range.Bedrooms.min > 0 ) ?
            `${ range.Bedrooms.min } bed` :
            "Studio";
        return ( range.Bedrooms.min === range.Bedrooms.max ) ?
            bedroomType :
            `${ range.Bedrooms.min } - ${ range.Bedrooms.max } bed`;
    },
    bath( range ) {
        return ( range.Bathrooms.min === range.Bathrooms.max ) ?
            `${ range.Bathrooms.min } bath` :
            `${ range.Bathrooms.min } - ${ range.Bathrooms.max } bath`;
    },
    sqft( range ) {
        return ( range.SquareFootage.min === range.SquareFootage.max ) ?
            `${ range.SquareFootage.min } sqft` :
            `${ range.SquareFootage.min } - ${ range.SquareFootage.max } sqft`;
    },
    price( range ) {
        return ( range.BaseRentAmount.min === range.BaseRentAmount.max ) ?
            `$ ${ range.BaseRentAmount.min }` :
            `From $ ${ range.BaseRentAmount.min } - $ ${ range.BaseRentAmount.max }`;
    },
};

/*
* Create New Item
*/
const createNewItem = ( {
    data,
    $grid,
    classes = false,
    link = false,
} = {} ) => {
    const $newItem = document.createElement( "div" );
    $newItem.classList.add( "item" );
    if ( classes ) $newItem.classList.add( classes );
    if ( link ) {
        const $anchor = document.createElement( "a" );
        $anchor.textContent = data;
        $anchor.href = link;
        $anchor.target = "_blank";
        $newItem.append( $anchor );
    } else {
        $newItem.textContent = data;
    }
    $grid.append( $newItem );
};

/*
* Build Grid Table
*/
const buildGridTable = ( data, $grid ) => {
    createNewItem( {
        data: data.UnitNumber,
        $grid,
        classes: "first",
    } );
    createNewItem( {
        data: data.FloorNumber,
        $grid,
    } );
    createNewItem( {
        data: `$${ data.BaseRentAmount }`,
        $grid,
    } );
    createNewItem( {
        data: `$${ data.DepositAmount }`,
        $grid,
    } );
    createNewItem( {
        data: data.AvailableDate,
        $grid,
    } );
    createNewItem( {
        data: "Lease Now",
        $grid,
        classes: "last",
        link: "https://1849373v2.onlineleasing.realpage.com/",
    } );
};

/*
* Assemble Grid Data
*/
const assembleFields = ( $child, ranges ) => {
    const child = $child;
    if ( $child.classList.contains( "bed" ) ) {
        child.textContent = dataAssembly.bed( ranges );
    } else if ( $child.classList.contains( "bath" ) ) {
        child.textContent = dataAssembly.bath( ranges );
    } else if ( $child.classList.contains( "sqft" ) ) {
        child.textContent = dataAssembly.sqft( ranges );
    } else if ( $child.classList.contains( "price" ) ) {
        child.textContent = dataAssembly.price( ranges );
    }
};

/*
* Populate Floor Plan Grid
*/
const populateFloorPlanGrid = ( ranges, $id ) => {
    findChildClass( $id, "data", ( $data ) => {
        findChildClass( $data, "attributes", ( $attrs ) => {
            findChildClass( $attrs, "rest", ( $rest ) => {
                Array.prototype.forEach.call( $rest.childNodes, ( $child ) => {
                    if ( $child.tagName === "SPAN" ) {
                        assembleFields( $child, ranges );
                        $id.classList.add( "available" );
                    }
                } );
            } );
        } );
    } );
};

/*
* Populate Primary Comp
*/
const populatePrimaryComp = ( ranges ) => {
    const $attrs = document.getElementsByClassName( "attributes" )[ 0 ];
    findChildClass( $attrs, "rest", ( $rest ) => {
        Array.prototype.forEach.call( $rest.childNodes, ( $child ) => {
            if ( $child.tagName === "SPAN" ) {
                assembleFields( $child, ranges );
            }
        } );
    } );
};

/*
* Populate Units Comp
*/
const populateUnitsComp = ( data ) => {
    const $units = document.getElementById( "comp-available" );
    findChildClass( $units, "wrapper", ( $wrapper ) => {
        findChildClass( $wrapper, "grid", ( $grid ) => {
            if ( Array.isArray( data ) ) {
                data.forEach( ( row ) => {
                    buildGridTable( row, $grid );
                } );
            } else {
                Object.keys( data ).forEach( ( row ) => {
                    buildGridTable( data[ row ], $grid );
                } );
            }
        } );
    } );
};

/*
* Single Floorplan Populator
*/
const singleFloorplanPopulator = ( data, filter = false ) => {
    const ranges = buildDataRanges( data );
    if ( ranges.name ) {
        const $floorplan = document.getElementById( ranges.name );
        const $primary = document.getElementsByClassName( "primary" );
        const $units = document.getElementById( "comp-available" );
        if ( $primary ) populatePrimaryComp( ranges );
        if ( $floorplan ) populateFloorPlanGrid( ranges, $floorplan );
        if ( $units ) populateUnitsComp( data.AvailableUnits );
    }
};

/*
* Assemble REST Path
*/
const assembleRESTPath = ( params ) => {
    let RESTPath = `${ window.location.host }`;
    if ( window.location.host.indexOf( "localhost" ) >= 0 ) {
        RESTPath += "/green_dyna-18"; // dev path
    }
    const requestAll = "&request=units";
    const requestByName = "&request=unitsby&type=name&filter=";
    RESTPath += "/rest/?";
    RESTPath += "apiKey=SMASH&user=HULK&token=true";
    if ( params ) RESTPath += requestByName + params;
    else RESTPath += requestAll;
    return RESTPath;
};

/*
* Response Handling
*/
const responseHandling = ( xmlHTTP, callback ) => {
    if ( xmlHTTP.status >= 200 && xmlHTTP.status < 300 ) {
        callback();
    } else if ( xmlHTTP.status >= 400 && xmlHTTP.status < 500 ) {
        // console.warn( "error! request status", xmlHTTP.status );
    } else {
        // console.warn( "warning! evacuate: ", xmlHTTP.status );
    }
};

/*
* AJAX Requester
*/
const ajaxRequester = ( params, callback ) => {
    const RESTPath = assembleRESTPath( params );
    const xmlHTTP = new XMLHttpRequest();
    xmlHTTP.onreadystatechange = () => {
        if ( xmlHTTP.readyState === XMLHttpRequest.DONE ) {
            responseHandling( xmlHTTP, () => {
                callback( xmlHTTP.response );
            } );
        }
    };
    xmlHTTP.open( "GET", RESTPath, true );
    xmlHTTP.setRequestHeader( "Content-Type", "application/json" );
    xmlHTTP.send();
    return true;
};

/*
* Get Primary ID
*/
const getPrimaryID = () => {
    const $primary = document.getElementsByClassName( "primary" )[ 0 ];
    return $primary.getAttribute( "id" );
};

/*
* Get Floor Plan IDs
*/
const getFloorPlanIDs = ( callback ) => {
    const $floorplans = document.getElementsByClassName( "floorplan" );
    Array.prototype.forEach.call( $floorplans, ( $single ) => {
        callback( $single.getAttribute( "id" ) );
    } );
};

/*
* Fetch Data
*/
const fetchData = () => {
    const $body = document.getElementsByTagName( "BODY" )[ 0 ];
    if ( $body.classList.contains( "single-floorplan" ) ) {
        ajaxRequester( getPrimaryID(), data =>
            singleFloorplanPopulator( JSON.parse( data ) ) );
    } else if ( $body.classList.contains( "post-type-archive-floorplan" ) ) {
        getFloorPlanIDs( ( $id ) => {
            ajaxRequester( $id, ( data ) => {
                const thisData = JSON.parse( data );
                singleFloorplanPopulator( thisData );
            } );
        } );
    }
};
