import { isDate } from './isDate.js';

/**
 * Gets the day, month, year values of a valid Date instance
 * 
 * @param { Date } value - The Date instance
 * 
 * @returns { ( Object | null ) } - The day, month, year values as an object or null in case of invalid param
 * 
 * @example
 * getDateObj( new Date( 2021, 0, 1 ) ); // returns { day: 1, month: 1, year: 2021 }
 * getDateObj( new Date( 'bla.. bla..' ); // returns null
 */

const getDateObj = value => {

    if ( value instanceof Date ) {

        const day = value.getDate();
        const month = value.getMonth() + 1;
        const year = value.getFullYear();

        if ( isDate( day, month, year ) ) {
            return { day, month, year };
        }
    }

    return null;
}

export default getDateObj;
export { getDateObj };