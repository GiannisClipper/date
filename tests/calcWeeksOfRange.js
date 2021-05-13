import { assert } from './assert.js';
import { calcWeeksOfRange } from '../src/calcWeeksOfRange.js';

console.log( 'Testing calcWeeksOfRange...' );

assert.deepStrictEqual( calcWeeksOfRange(), null, 'calcWeeksOfRange()' );
assert.deepStrictEqual( calcWeeksOfRange( "bla.. bla.." ), null, 'calcWeeksOfRange( "bla.. bla.." )' );
assert.deepStrictEqual( calcWeeksOfRange( "20210515", 123 ), null, 'calcWeeksOfRange( "20210515", 123 )' );

assert.deepStrictEqual( calcWeeksOfRange( "20210501", "20210515" ), [
    [ { year: 2021, month: 4, day: 26 }, { year: 2021, month: 5, day: 2 } ],
    [ { year: 2021, month: 5, day: 3 }, { year: 2021, month: 5, day: 9 } ],
    [ { year: 2021, month: 5, day: 10 }, { year: 2021, month: 5, day: 16 } ]
], 'calcWeeksOfRange( "20210501", "20210515" )' );

assert.deepStrictEqual( calcWeeksOfRange( "20201231", "20210101" ), [
    [ { year: 2020, month: 12, day: 28 }, { year: 2021, month: 1, day: 3 } ],
], 'calcWeeksOfRange( "20201231", "20210101" )' );
