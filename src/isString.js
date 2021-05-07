/**
 * Checks if a value is a string
 * 
 * @param { number } value - The value to be checked
 * 
 * @returns { boolean } - True or false
 */

 const isString = value => {

    return typeof value === 'string';
}

export default isString;
export { isString };