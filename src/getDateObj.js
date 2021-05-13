import { isDate } from './isDate.js';

/**
 * Retrieves date values from an object ({ year:, month:, day: }).
 * 
 * @param { Object } value - An object expressing a date
 * 
 * @returns { ( Object | null ) } - An object with the date values ({ year:, month:, day: }) or null in case of invalid param
 * 
 * @example
 * getDateObj( { year: 2021, month: 1, day: 31 } ); // returns { year: 2021, month: 1, day: 31 }
 * getDateObj( { year: 2021, month: 1 } ); // returns null
 * 
 * - - -
 * @memberof B.get
 */

const getDateObj = value => {

    if ( ( value !== null && typeof value === 'object' ) &&
        ( Object.keys( value ).sort().reduce( ( keys, key ) => keys += key, '' ) === 'daymonthyear' ) &&
        ( isDate( value.year, value.month, value.day ) ) ) {

        return value;
    }

    return null;
}

export default getDateObj;
export { getDateObj };