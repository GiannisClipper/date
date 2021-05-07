import { assert } from './assert.js';
import { getDateByDayOfYear } from '../src/getDateByDayOfYear.js';

function test_getDateByDayOfYear() {
    assert.deepStrictEqual( getDateByDayOfYear(), null, 'getDateByDayOfYear()' );
    assert.deepStrictEqual( getDateByDayOfYear( "bla.. bla.." ), null, 'getDateByDayOfYear( "bla.. bla.." )' );
    assert.deepStrictEqual( getDateByDayOfYear( 1, "2021" ), null, 'getDateByDayOfYear( 1, "2021" )' );
    assert.deepStrictEqual( getDateByDayOfYear( -1, 2021 ), null, 'getDateByDayOfYear( -1, 2021 )' );
    assert.deepStrictEqual( getDateByDayOfYear( 0, 2021 ), null, 'getDateByDayOfYear( 0, 2021 )' );
    assert.deepStrictEqual( getDateByDayOfYear( 1.5, 2021 ), null, 'getDateByDayOfYear( 1.5, 2021 )' );
    assert.deepStrictEqual( getDateByDayOfYear( 366, 2021 ), null, 'getDateByDayOfYear( 366, 2021 )' );
    assert.deepStrictEqual( getDateByDayOfYear( 366, 2024 ), [ 31, 12, 2024 ], 'getDateByDayOfYear( 366, 2024 )' );
    assert.deepStrictEqual( getDateByDayOfYear( 60, 2021 ), [ 1, 3, 2021 ], 'getDateByDayOfYear( 60, 2021 )' );
}

console.log( 'Testing getDateByDayOfYear...' );
test_getDateByDayOfYear();
