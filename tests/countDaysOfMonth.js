import { assert } from './assert.js';
import { countDaysOfMonth } from '../src/countDaysOfMonth.js';

console.log( 'Testing countDaysOfMonth...' );

assert.strictEqual( countDaysOfMonth( 1 ), null, 'countDaysOfMonth( 1 )' );
assert.strictEqual( countDaysOfMonth( 1, 1 ), null, 'countDaysOfMonth( 1, 1 )' );
assert.strictEqual( countDaysOfMonth( -1, 2021 ), null, 'countDaysOfMonth( -1, 2021 )' );
assert.strictEqual( countDaysOfMonth( 0, 2021 ), null, 'countDaysOfMonth( 0, 2021 )' );
assert.strictEqual( countDaysOfMonth( 1, 2021 ), 31, 'countDaysOfMonth( 1, 2021 )' );
assert.strictEqual( countDaysOfMonth( 2, 2021 ), 28, 'countDaysOfMonth( 2, 2021 )' );
assert.strictEqual( countDaysOfMonth( 2, 2024 ), 29, 'countDaysOfMonth( 2, 2024 )' );
assert.strictEqual( countDaysOfMonth( 3, 2021 ), 31, 'countDaysOfMonth( 3, 2021 )' );
assert.strictEqual( countDaysOfMonth( 4, 2021 ), 30, 'countDaysOfMonth( 4, 2021 )' );
assert.strictEqual( countDaysOfMonth( 5, 2021 ), 31, 'countDaysOfMonth( 5, 2021 )' );
assert.strictEqual( countDaysOfMonth( 6, 2021 ), 30, 'countDaysOfMonth( 6, 2021 )' );
assert.strictEqual( countDaysOfMonth( 7, 2021 ), 31, 'countDaysOfMonth( 7, 2021 )' );
assert.strictEqual( countDaysOfMonth( 8, 2021 ), 31, 'countDaysOfMonth( 8, 2021 )' );
assert.strictEqual( countDaysOfMonth( 9, 2021 ), 30, 'countDaysOfMonth( 9, 2021 )' );
assert.strictEqual( countDaysOfMonth( 10, 2021 ), 31, 'countDaysOfMonth( 10, 2021 )' );
assert.strictEqual( countDaysOfMonth( 11, 2021 ), 30, 'countDaysOfMonth( 11, 2021 )' );
assert.strictEqual( countDaysOfMonth( 12, 2021 ), 31, 'countDaysOfMonth( 12, 2021 )' );
assert.strictEqual( countDaysOfMonth( 13, 2021 ), null, 'countDaysOfMonth( 13, 2021 )' );
assert.strictEqual( countDaysOfMonth( "12", 2021 ), null, 'countDaysOfMonth( "12", 2021 )' );

