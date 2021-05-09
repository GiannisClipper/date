import { assert } from './assert.js';
import { calcDateByDayOfYear } from '../src/calcDateByDayOfYear.js';

function test_calcDateByDayOfYear() {
    assert.deepStrictEqual( calcDateByDayOfYear(), null, 'calcDateByDayOfYear()' );
    assert.deepStrictEqual( calcDateByDayOfYear( "bla.. bla.." ), null, 'calcDateByDayOfYear( "bla.. bla.." )' );
    assert.deepStrictEqual( calcDateByDayOfYear( 1, "2021" ), null, 'calcDateByDayOfYear( 1, "2021" )' );
    assert.deepStrictEqual( calcDateByDayOfYear( -1, 2021 ), null, 'calcDateByDayOfYear( -1, 2021 )' );
    assert.deepStrictEqual( calcDateByDayOfYear( 0, 2021 ), null, 'calcDateByDayOfYear( 0, 2021 )' );
    assert.deepStrictEqual( calcDateByDayOfYear( 1.5, 2021 ), null, 'calcDateByDayOfYear( 1.5, 2021 )' );
    assert.deepStrictEqual( calcDateByDayOfYear( 366, 2021 ), null, 'calcDateByDayOfYear( 366, 2021 )' );
    assert.deepStrictEqual( calcDateByDayOfYear( 366, 2024 ), [ 31, 12, 2024 ], 'calcDateByDayOfYear( 366, 2024 )' );
    assert.deepStrictEqual( calcDateByDayOfYear( 60, 2021 ), [ 1, 3, 2021 ], 'calcDateByDayOfYear( 60, 2021 )' );
}

console.log( 'Testing calcDateByDayOfYear...' );
test_calcDateByDayOfYear();
