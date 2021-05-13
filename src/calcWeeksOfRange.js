import { setDateObj } from './setDateObj.js';
import { calcDayOfWeek } from './calcDayOfWeek.js';
import { opLessThan } from './opLessThan.js';
import { calcDateByDaysAddition } from './calcDateByDaysAddition.js';

/**
 * Calculates the weeks according to a range of days that are placed within.
 * 
 * @param { ( Object | Object[] | string | Date ) } from - A starting date of a range
 * @param { ( Object | Object[] | string | Date ) } till - An ending date of a range
 * 
 * @returns { ( Object[] | null ) } - A 2-dimensional array with the starting & ending dates of each week or null in case of invalid params
 * 
 * @example
 * calcWeeksOfRange( '20210501', '20210515' ) 
 *      // returns [
 *      //   [ '20210426', '20210502' ],
 *      //   [ '20210503', '20210509' ],
 *      //   [ '20210510', '20210516' ]
 *      // ]
 * calcWeeksOfRange( '20210501' ); // returns null 
 * 
 * - - -
 * @memberof D.calc
 */

const calcWeeksOfRange = ( from, till ) => {

    from = setDateObj( from );
    till = setDateObj( till );

    if ( from && till ) {

        const weeks = [];
        const dayOfWeek = calcDayOfWeek( from );
        from = calcDateByDaysAddition( from, -dayOfWeek + 1 );

        while ( opLessThan( from, till ) ) {
            weeks.push( [
                from,
                calcDateByDaysAddition( from, 6 )
            ] );
            from = calcDateByDaysAddition( from, 7 );
        }

        return weeks;
    }

    return null;
}

export default calcWeeksOfRange;
export { calcWeeksOfRange };