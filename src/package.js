shiftDays

const dateToYYYYMMDD = date => {
    const year = date ? date.getFullYear() : '';
    const month = date ? ( date.getMonth() + 1 ).toString().padStart( 2, '0' ) : '';
    const dateNum = date ? date.getDate().toString().padStart( 2, '0' ) : '';
    return year + month + dateNum;
}

const YYYYMMDDToDate = value => {
    let retval = null;
    if ( isYYYYMMDD( value ) ) {
        const { year, month, dateNum } = splitYYYYMMDD( value );
        retval = new Date( year, month - 1, dateNum, 12, 0, 0, 0 );
    }
    return retval;
}

const reprToYYYYMMDD = ( value, pattern ) => {
    value = value || '';
    pattern = ( pattern || 'DD/MM/YYYY' ).toUpperCase();
    const YMD = { Y: '', M: '', D: '' };
    value.split( '' ).map( ( x, i ) => YMD[ pattern[ i ] ] += x )
    const retval = YMD.Y + YMD.M + YMD.D;
    return isYYYYMMDD( retval ) ? retval : '';
}

const YYYYMMDDToRepr = ( value, pattern ) => {
    let retval = '';
    if ( isYYYYMMDD( value ) ) {
        pattern = ( pattern || 'D/M/Y' ).toUpperCase();
        const YMD = {
            Y: value.substring( 0, 4 ),
            M: value.substring( 4, 6 ),
            D: value.substring( 6, 8 ), 
        };
        pattern.split( '' ).map( x => retval += x in YMD ? YMD[ x ] : x );
    }
    return retval;
}

const shiftDate = ( date, days ) => {
    let newDate = new Date( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );  // (1day = 24h * 60min * 60sec * 1000msec)

    // Adjust `newDate` considering the starting or ending of the Daylight Saving Time.
    const timezoneDiff = date.getTimezoneOffset() - newDate.getTimezoneOffset();

    if ( timezoneDiff !== 0 ) {
        newDate = new Date( newDate.getTime() - timezoneDiff * 60 * 1000 );    
    };

    return newDate;
}

const splitWeeks = ( dateFrom, dateTill ) => {

    // TODO: should consider and the time values as well

    const dayOfWeek = dateFrom.getDay();
    const days = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    dateFrom = shiftDate( dateFrom, -days );

    const weeks = [];
    while ( dateFrom <= dateTill ) {
        weeks.push( {
            dateFrom,
            dateTill: shiftDate( dateFrom, 6 ),
        } );
        dateFrom = shiftDate( dateFrom, 7 );
    }
    return weeks;
}

export { 
    isLeap,
    isYear,
    isMonth,
    maxDateNum,
    isDateNum,
    splitYYYYMMDD,
    isYYYYMMDD,
    dateToYYYYMMDD,
    YYYYMMDDToDate,
    reprToYYYYMMDD,
    YYYYMMDDToRepr,
    daysBetween,
    shiftDate,
    splitWeeks
};