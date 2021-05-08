import compareValidation from './compareValidation.js';

/**
* Compares dates in an array according to a given condition
* 
* @param { Object[] } dates - An array of dates
* @param { function } condition - A function evaluating a condition between two items
* 
* @returns { boolean } - True or false or null on invalid params
*/

const compare = ( dates, condition ) => {

    if ( compareValidation( dates ) ) {

        let prevDate = dates[ 0 ];
        let nextDate;

        for ( let i = 1; i < dates.length; i++ ) {

            nextDate = dates[ i ];
            if ( ! condition( prevDate, nextDate ) ) {

                return false;
            }
            prevDate = nextDate;
        }

        return true;
    }

    return null;
};

export default compare;
export { compare };