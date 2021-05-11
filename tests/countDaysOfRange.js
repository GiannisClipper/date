import { assert } from './assert.js';
import { countDaysOfRange } from '../src/countDaysOfRange.js';

console.log( 'Testing countDaysOfRange...' );

assert.strictEqual( countDaysOfRange(), null, 'countDaysOfRange()' );
assert.strictEqual( countDaysOfRange( 1, 2 ), null, 'countDaysOfRange( 1, 2 )' );
assert.strictEqual( countDaysOfRange( [ 2021, 1, 1 ] ), null, 'countDaysOfRange( [ 2021, 1, 1 ] )' );
assert.strictEqual( countDaysOfRange( [ 2021, 1, 1 ], [ 2021, 1, 1 ] ), 1, 'countDaysOfRange( [ 2021, 1, 1 ], [ 2021, 1, 1 ] )' );
assert.strictEqual( countDaysOfRange( [ 2020, 12, 31 ], [ 2021, 1, 1 ] ), 2, 'countDaysOfRange( [ 2020, 12, 31 ], [ 2021, 1, 1 ] )' );
assert.strictEqual( countDaysOfRange( [ 2021, 1, 1 ], [ 2020, 12, 31 ] ), -2, 'countDaysOfRange( [ 2021, 1, 1 ], [ 2020, 12, 31 ] )' );
assert.strictEqual( countDaysOfRange( [ 2020, 12, 31 ], [ 2021, 12, 31 ] ), 366, 'countDaysOfRange( [ 2020, 12, 31 ], [ 2021, 12, 31 ] )' );
assert.strictEqual( countDaysOfRange( [ 2023, 12, 31 ], [ 2024, 12, 31 ] ), 367, 'countDaysOfRange( [ 2023, 12, 31 ], [ 2024, 12, 31 ] )' );
assert.strictEqual( countDaysOfRange( "20210101" ), null, 'countDaysOfRange( "20210101" )' );
assert.strictEqual( countDaysOfRange( "20210101", "20210107" ), 7, 'countDaysOfRange( "20210101", "20210107" )' );
assert.strictEqual( countDaysOfRange( "20181202", "20220120" ), 1146, 'countDaysOfRange( "20181202", "20220120" )' );
assert.strictEqual( countDaysOfRange( "20220120", "20181202" ), -1146, 'countDaysOfRange( "20220120", "20181202" )' );
// 30 + 365 + 366 + 365 + 20 = 1146

