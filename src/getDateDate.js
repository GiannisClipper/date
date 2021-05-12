import { isDate } from './isDate.js';

/**
 * Retrieves date values from a Date instance
 * 
 * @param { Date } value - A Date instance
 * 
 * @returns { ( Object | null ) } - An object with the date values ({ year:, month:, day: }) or null in case of invalid param
 * 
 * @example
 * getDateDate( new Date( 2021, 0, 31 ) ); // returns { year: 2021, month: 1, day: 31 }
 * getDateDate( new Date( 'bla.. bla..' ); // returns null
 */

const getDateDate = value => {

    if ( value instanceof Date ) {

        const year = value.getFullYear();
        const month = value.getMonth() + 1;
        const day = value.getDate();

        if ( isDate( year, month, day ) ) {
            return { year, month, day };
        }
    }

    return null;
}

export default getDateDate;
export { getDateDate };