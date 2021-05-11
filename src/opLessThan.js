import setDateStr from './setDateStr.js';

/**
* Operates a comparison between two dates where the first should be less than to the second
* 
* @param { ( Object | string | Object[] | Date ) } date1 - The first date
* @param { ( Object | string | Object[] | Date ) } date2 - The second date
* 
* @returns { boolean } - True or false or null on invalid params
* 
* @example
* opLessThan( '20210101', '20210102' );  // returns true
* opLessThan( '20210101', '20210101' );  // returns false
*/

const opLessThan = ( date1, date2 ) => {

    date1 = setDateStr( date1 );
    date2 = setDateStr( date2 );

    if ( date1 && date2 ) {

        return date1 < date2
            ? true
            : false;
    }

    return null;
};

export default opLessThan;
export { opLessThan };