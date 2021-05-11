import { assert } from './assert.js';
import { isYear } from '../src/isYear.js';

console.log( 'Testing isYear...' );

assert.strictEqual( isYear( "2021" ), false, 'isYear( "2021" )' );
assert.strictEqual( isYear( 1789 ), false, 'isYear( 1789 )' );
assert.strictEqual( isYear( 2021 ), true, 'isYear( 2000 )' );
