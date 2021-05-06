import { isDate } from './isDate.js';

/**
 * Checks if a value is an array expressing a date ([ day, month, year ])
 * @param { Object[] } value - The value to be checked
 * @returns { boolean } - A boolean response
 */
const isDateArr = value => {

    return Array.isArray( value ) && value.length === 3 && isDate( ...value );
}

export default isDateArr;
export { isDateArr };