import { assert } from './assert.js';
import { countDaysOfYear } from '../src/countDaysOfYear.js';

console.log( 'Testing countDaysOfYear...' );

assert.strictEqual( countDaysOfYear(), null, 'countDaysOfYear()' );
assert.strictEqual( countDaysOfYear( 0 ), null, 'countDaysOfYear( 0 )' );
assert.strictEqual( countDaysOfYear( "1" ), null, 'countDaysOfYear( "1" )' );
assert.strictEqual( countDaysOfYear( 2021 ), 365, 'countDaysOfYear( 2021 )' );
assert.strictEqual( countDaysOfYear( 2024 ), 366, 'countDaysOfYear( 2024 )' );
