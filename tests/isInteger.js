import { assert } from './assert.js';
import { isInteger } from '../src/isInteger.js';

console.log( 'Testing isInteger...' );

assert.strictEqual( isInteger(), false, 'isInteger()' );
assert.strictEqual( isInteger( null ), false, 'isInteger( null )' );
assert.strictEqual( isInteger( NaN ), false, 'isInteger( NaN )' );
assert.strictEqual( isInteger( [] ), false, 'isInteger( [] )' );
assert.strictEqual( isInteger( {} ), false, 'isInteger( {} )' );
assert.strictEqual( isInteger( false ), false, 'isInteger( false )' );
assert.strictEqual( isInteger( 20.5 ), false, 'isInteger( 20.5 )' );
assert.strictEqual( isInteger( '100' ), false, 'isInteger( "100" )' );
assert.strictEqual( isInteger( 100 ), true, 'isInteger( 100 )' );
assert.strictEqual( isInteger( 0 ), true, 'isInteger( 0 )' );
assert.strictEqual( isInteger( -10 ), true, 'isInteger( -10 )' );
