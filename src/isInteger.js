/**
 * Validates if a value is an integer
 * 
 * @param { number } value - The value to be validated
 * 
 * @returns { boolean } - True or false
 */

 const isInteger = value => {

    return typeof value === 'number' && Number.isInteger( value );
}

export default isInteger;
export { isInteger };