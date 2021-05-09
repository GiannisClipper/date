import { assert } from './assert.js';
import { countDaysOfRange } from '../src/countDaysOfRange.js';

console.log( 'Testing countDaysOfRange...' );

assert.strictEqual( countDaysOfRange(), null, 'countDaysOfRange()' );
assert.strictEqual( countDaysOfRange( 1, 2 ), null, 'countDaysOfRange( 1, 2 )' );
assert.strictEqual( countDaysOfRange( [ 1, 1, 2021 ] ), null, 'countDaysOfRange( [ 1, 1, 2021 ] )' );
assert.strictEqual( countDaysOfRange( [ 1, 1, 2021 ], [ 1, 1, 2021 ] ), 1, 'countDaysOfRange( [ 1, 1, 2021 ], [ 1, 1, 2021 ] )' );
assert.strictEqual( countDaysOfRange( [ 31, 12, 2020 ], [ 1, 1, 2021 ] ), 2, 'countDaysOfRange( [ 31, 12, 2020 ], [ 1, 1, 2021 ] )' );
assert.strictEqual( countDaysOfRange( [ 1, 1, 2021 ], [ 31, 12, 2020 ] ), -2, 'countDaysOfRange( [ 1, 1, 2021 ], [ 31, 12, 2020 ] )' );
assert.strictEqual( countDaysOfRange( [ 31, 12, 2020 ], [ 31, 12, 2021 ] ), 366, 'countDaysOfRange( [ 31, 12, 2020 ], [ 31, 12, 2021 ] )' );
assert.strictEqual( countDaysOfRange( [ 31, 12, 2023 ], [ 31, 12, 2024 ] ), 367, 'countDaysOfRange( [ 31, 12, 2023 ], [ 31, 12, 2024 ] )' );
assert.strictEqual( countDaysOfRange( "20210101" ), null, 'countDaysOfRange( "20210101" )' );
assert.strictEqual( countDaysOfRange( "20210101", "20210107" ), 7, 'countDaysOfRange( "20210101", "20210107" )' );
assert.strictEqual( countDaysOfRange( "20181202", "20220120" ), 1146, 'countDaysOfRange( "20181202", "20220120" )' );
assert.strictEqual( countDaysOfRange( "20220120", "20181202" ), -1146, 'countDaysOfRange( "20220120", "20181202" )' );
// 30 + 365 + 366 + 365 + 20 = 1146

