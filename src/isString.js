/**
 * Validates if a value is a string.
 * 
 * @function
 * @package
 * 
 * @param { number } value The value to be validated
 * 
 * @returns { boolean } True or false 
 */

 const isString = value => {

    return typeof value === 'string';
}

export default isString;
export { isString };