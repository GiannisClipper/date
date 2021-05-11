import { setDateObj } from './setDateObj.js';

/**
 * Creates a Date instance
 * 
 * @param { ( Object | string | Object[] | Date ) } value - The date
 * 
 * @returns { ( Date | null ) } - An Date instance or null in case of invalid param
 */

const setDateDate = value => {

    const result = setDateObj( value );

    return result !== null
        ? new Date( result.year, result.month - 1, result.day, 12, 0, 0, 0 )  // hour=12 to assure against timezone or summertime
        : null;
}

export default setDateDate;
export { setDateDate };