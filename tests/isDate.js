import { assert } from './assert.js';
import { isDate } from '../src/isDate.js';

console.log( 'Testing isDate...' );

assert.strictEqual( isDate(), false, 'isDate()' );
assert.strictEqual( isDate( null ), false, 'isDate( null )' );
assert.strictEqual( isDate( NaN ), false, 'isDate( Nan )' );
assert.strictEqual( isDate( 123 ), false, 'isDate( 123 )' );
assert.strictEqual( isDate( 'bla.. bla..' ), false, 'isDate( "bla.. bla.." )' );
assert.strictEqual( isDate( [] ), false, 'isDate( [] )' );
assert.strictEqual( isDate( {} ), false, 'isDate( {} )' );
assert.strictEqual( isDate( 1, 1 ), false, 'isDate( 1, 1' );
assert.strictEqual( isDate( 1, 1, -1 ), false, 'isDate( 1, 1, -1' );
assert.strictEqual( isDate( "2021", 1, 1 ), false, 'isDate( "2021",  1, 1 )' );
assert.strictEqual( isDate( 2021, 1, 1 ), true, 'isDate( 2021, 1, 1 )' );
assert.strictEqual( isDate( 2021, 1, 31 ), true, 'isDate( 2021, 1, 31 )' );
assert.strictEqual( isDate( 2021, 2, 31 ), false, 'isDate( 2021, 2, 31 )' );
assert.strictEqual( isDate( 2021, 2, 30 ), false, 'isDate( 2021, 2, 30 )' );
assert.strictEqual( isDate( 2021, 2, 29 ), false, 'isDate( 2021, 2, 29 )' );
assert.strictEqual( isDate( 2021, 2, 28 ), true, 'isDate( 2021, 2, 28 )' );
assert.strictEqual( isDate( 2024, 2, 30 ), false, 'isDate( 2024, 2, 30 )' );
assert.strictEqual( isDate( 2024, 2, 29 ), true, 'isDate( 2034, 2, 29 )' );
assert.strictEqual( isDate( 2021, 3, 0 ), false, 'isDate( 2021, 3, 0 )' );
assert.strictEqual( isDate( 2021, 3, -1 ), false, 'isDate( 2021, 3, -1 )' );
