/**
 * Checks if a value is an integer
 * @param { number } value - The value to be checked
 * @returns { boolean } - A boolean response
 */
 const isInteger = value => {

    return typeof value === 'number' && Number.isInteger( value );
}

export default isInteger;
export { isInteger };