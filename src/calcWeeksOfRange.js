import { setDateObj } from './setDateObj.js';
import { calcDayOfWeek } from './calcDayOfWeek.js';
import { opLessThan } from './opLessThan.js';
import { calcDateByDaysAddition } from './calcDateByDaysAddition.js';

/**
 * Calculates the weeks within is placed a range of days
 * 
 * @param { ( Object | string | Object[] | Date ) } from - The starting date of the range
 * @param { ( Object | string | Object[] | Date ) } till - The ending date of the range
 * 
 * @returns { ( Object[] | null ) } - A 2-dimensional array with the starting & ending dates of each week or null in case of invalid params
 * 
 * @example
 * calcWeeksOfRange( '20210501', '20210515' ) 
 * // returns [
 * //   [ '20210426', '20210502' ],
 * //   [ '20210503', '20210509' ],
 * //   [ '20210510', '20210516' ]
 * // ]
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