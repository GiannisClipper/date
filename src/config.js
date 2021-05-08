import { isInteger } from './isInteger.js';

/**
 * Sets and gets the range of valid years, that is by default from 1900 to 2099.
 * 
 * @namespace
 * 
 * @example
 * config.getYearRange(); // returns [ 1900, 2099 ]
 * config.setYearRange( 1800, 2199 ); // returns true
 * config.getYearRange(); // returns [ 1800, 2199 ]
 */

 const config = {

    /** @lends config */

    /**
    * Sets the range of valid years
    * 
    * @param { number } from - The starting year
    * @param { number } till - The ending year
    * 
    * @returns { boolean } - True on success or false on invalid params
    * 
    * @example
    * config.setYearRange( '1800-2199' ); // returns false
    * config.setYearRange( 1800, 2199 ); // returns true
    */

    setYearRange( from, till ) {

        if ( isInteger( from ) && isInteger( till ) && from <= till ) {

            process.env.GIANNISCLIPPER_DATE_YEAR_FROM = from;
            process.env.GIANNISCLIPPER_DATE_YEAR_TILL = till;
            return true;
        }

        return false;
    },

    /**
    * Gets the range of valid years
    * 
    * @returns { Object[] } - An array with the starting and ending dates
    * 
    * @example
    * config.getYearRange(); // returns [ 1900, 2099 ]
    */

    getYearRange() {
        const from = parseInt( process.env.GIANNISCLIPPER_DATE_YEAR_FROM );
        const till = parseInt( process.env.GIANNISCLIPPER_DATE_YEAR_TILL );

        return isInteger( from ) && isInteger( till ) && from <= till
            ? [ from, till ]
            : [ 1900, 2099 ];
    },

};

export default config;
export { config };