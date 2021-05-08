import { assert } from './assert.js';
import { findDateByDayOfYear } from '../src/findDateByDayOfYear.js';

function test_findDateByDayOfYear() {
    assert.deepStrictEqual( findDateByDayOfYear(), null, 'findDateByDayOfYear()' );
    assert.deepStrictEqual( findDateByDayOfYear( "bla.. bla.." ), null, 'findDateByDayOfYear( "bla.. bla.." )' );
    assert.deepStrictEqual( findDateByDayOfYear( 1, "2021" ), null, 'findDateByDayOfYear( 1, "2021" )' );
    assert.deepStrictEqual( findDateByDayOfYear( -1, 2021 ), null, 'findDateByDayOfYear( -1, 2021 )' );
    assert.deepStrictEqual( findDateByDayOfYear( 0, 2021 ), null, 'findDateByDayOfYear( 0, 2021 )' );
    assert.deepStrictEqual( findDateByDayOfYear( 1.5, 2021 ), null, 'findDateByDayOfYear( 1.5, 2021 )' );
    assert.deepStrictEqual( findDateByDayOfYear( 366, 2021 ), null, 'findDateByDayOfYear( 366, 2021 )' );
    assert.deepStrictEqual( findDateByDayOfYear( 366, 2024 ), [ 31, 12, 2024 ], 'findDateByDayOfYear( 366, 2024 )' );
    assert.deepStrictEqual( findDateByDayOfYear( 60, 2021 ), [ 1, 3, 2021 ], 'findDateByDayOfYear( 60, 2021 )' );
}

console.log( 'Testing findDateByDayOfYear...' );
test_findDateByDayOfYear();
