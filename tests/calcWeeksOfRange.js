import { assert } from './assert.js';
import { calcWeeksOfRange } from '../src/calcWeeksOfRange.js';

console.log( 'Testing calcWeeksOfRange...' );

assert.deepStrictEqual( calcWeeksOfRange(), null, 'calcWeeksOfRange()' );
assert.deepStrictEqual( calcWeeksOfRange( "bla.. bla.." ), null, 'calcWeeksOfRange( "bla.. bla.." )' );
assert.deepStrictEqual( calcWeeksOfRange( "20210515", 123 ), null, 'calcWeeksOfRange( "20210515", 123 )' );

assert.deepStrictEqual( calcWeeksOfRange( "20210501", "20210515" ), [
    [ { day: 26, month: 4, year: 2021 }, { day: 2, month: 5, year: 2021 } ],
    [ { day: 3, month: 5, year: 2021 }, { day: 9, month: 5, year: 2021 } ],
    [ { day: 10, month: 5, year: 2021 }, { day: 16, month: 5, year: 2021 } ]
], 'calcWeeksOfRange( "20210501", "20210515" )' );

assert.deepStrictEqual( calcWeeksOfRange( "20201231", "20210101" ), [
    [ { day: 28, month: 12, year: 2020 }, { day: 3, month: 1, year: 2021 } ],
], 'calcWeeksOfRange( "20201231", "20210101" )' );
