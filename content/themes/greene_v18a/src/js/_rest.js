/* eslint-disable no-unused-vars */
/* global delay */
/* global findChildClass */
/* eslint complexity: ["error", 7] */

/**
*
* ReST JS
*
*/

/*
* Range Finder
*/
const rangeFinder = ( data ) => {
    const ranges = {};
    ranges.count = 0;
    const units = data.AvailableUnits;
    Object.keys( units ).forEach( ( row ) => {
        Object.keys( units[ row ] ).forEach( ( key ) => {
            ranges.count += 1;
            if ( key === "Name" && !ranges.name ) {
                ranges.name = units[ row ][ key ];
            } else if ( typeof ( units[ row ][ key ] ) === "number" ) {
                if ( !ranges[ key ] ) {
                    ranges[ key ] = {};
                    ranges[ key ].min = units[ row ][ key ];
                    ranges[ key ].max = units[ row ][ key ];
                }
                if ( ranges[ key ].min > units[ row ][ key ] ) {
                    ranges[ key ].min = units[ row ][ key ];
                }
                if ( ranges[ key ].max < units[ row ][ key ] ) {
                    ranges[ key ].max = units[ row ][ key ];
                }
            }
        } );
    } );
    return ranges;
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
    if ( data.UnitNumber ) {
        createNewItem( {
            data: data.UnitNumber,
            $grid,
            classes: "first",
        } );
    }
    if ( data.FloorNumber ) {
        createNewItem( {
            data: data.FloorNumber,
            $grid,
        } );
    }
    if ( data.BaseRentAmount ) {
        createNewItem( {
            data: `$${ data.BaseRentAmount }`,
            $grid,
        } );
    }
    if ( data.DepositAmount ) {
        createNewItem( {
            data: `$${ data.DepositAmount }`,
            $grid,
        } );
    }
    if ( data.AvailableDate ) {
        createNewItem( {
            data: data.AvailableDate,
            $grid,
        } );
    }
    createNewItem( {
        data: "Lease Now",
        $grid,
        classes: "last",
        link: "https://1849373v2.onlineleasing.realpage.com/",
    } );
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
* Single Data Populator
*/
const singleDataPopulator = ( data ) => {
    const ranges = rangeFinder( data );
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
* AJAX Requester
*/
const ajaxRequester = ( params, callback ) => {
    const RESTPath = assembleRESTPath( params );
    const xmlHTTP = new XMLHttpRequest();
    xmlHTTP.onreadystatechange = () => {
        if ( xmlHTTP.readyState === XMLHttpRequest.DONE ) {
            if ( xmlHTTP.status >= 200 && xmlHTTP.status < 300 ) {
                callback( xmlHTTP.response );
            } else if ( xmlHTTP.status >= 400 && xmlHTTP.status < 500 ) {
                // console.warn( "error! request status", xmlHTTP.status );
            } else {
                // console.warn( "warning! evacuate: ", xmlHTTP.status );
            }
        }
    };
    xmlHTTP.open( "GET", RESTPath, true );
    xmlHTTP.setRequestHeader( "Content-Type", "application/json" );
    xmlHTTP.send();
    return true;
};

/*
* Get FP Name
*/
const getSingleName = () => {
    const $primary = document.getElementsByClassName( "primary" )[ 0 ];
    return $primary.getAttribute( "id" );
};
/*
* Get FP Name
*/
const getAllNames = ( callback ) => {
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
        ajaxRequester( getSingleName(), data =>
            singleDataPopulator( JSON.parse( data ) ) );
    } else if ( $body.classList.contains( "post-type-archive-floorplan" ) ) {
        getAllNames( ( $id ) => {
            ajaxRequester( $id, ( data ) => {
                const thisData = JSON.parse( data );
                singleDataPopulator( thisData );
            } );
        } );
    }
};
