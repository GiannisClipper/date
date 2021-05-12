import { isInteger } from './isInteger.js';
import { isString } from './isString.js';

/**
 * Sets and gets configuration values
 * 
 * @namespace
 */

 const config = {

    /** @lends config */

    /**
    * Sets the range of valid years (by default from 1900 to 2099)
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

        if ( from === undefined && till === undefined ) {

            delete process.env.GIANNISCLIPPER_DATE_YEAR_FROM;
            delete process.env.GIANNISCLIPPER_DATE_YEAR_TILL;
            return true;
        }

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
    * @returns { Object[] } - An array with starting and ending dates
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

    /**
    * Sets the pattern for the date representation (by default DD/MM/YYYY)
    * 
    * @param { string } pattern - A pattern
    * 
    * @returns { boolean } - True on success or false on invalid param
    * 
    * @example
    * config.setReprPattern( 0 ); // returns false
    * config.setReprPattern( 'DD-MM-YY' ); // returns true
    */

     setReprPattern( pattern ) {

        if ( pattern === undefined ) {

            delete process.env.GIANNISCLIPPER_DATE_REPR_PATTERN;
            return true;
        }
        
        if ( isString( pattern ) ) {

            process.env.GIANNISCLIPPER_DATE_REPR_PATTERN = pattern;
            return true;
        }

        return false;
    },

    /**
    * Gets the pattern for the date representation
    * 
    * @returns { string } - A pattern
    * 
    * @example
    * config.getReprPattern(); // returns 'DD/MM/YYYY'
    */

     getReprPattern() {
        const pattern = process.env.GIANNISCLIPPER_DATE_REPR_PATTERN;

        return isString( pattern )
            ? pattern
            : 'DD/MM/YYYY';
    },
};

export default config;
export { config };