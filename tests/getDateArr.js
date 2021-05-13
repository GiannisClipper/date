import { assert } from './assert.js';
import { getDateArr } from '../src/getDateArr.js';

console.log( 'Testing getDateArr...' );

assert.strictEqual( getDateArr(), null, 'getDateArr()' );
assert.strictEqual( getDateArr( null ), null, 'getDateArr( null )' );
assert.strictEqual( getDateArr( NaN ), null, 'getDateArr( Nan )' );
assert.strictEqual( getDateArr( 123 ), null, 'getDateArr( 123 )' );
assert.strictEqual( getDateArr( 'bla.. bla..' ), null, 'getDateArr( "bla.. bla.." )' );
assert.strictEqual( getDateArr( [] ), null, 'getDateArr( [] )' );
assert.strictEqual( getDateArr( {} ), null, 'getDateArr( {} )' );
assert.strictEqual( getDateArr( [ 2021, 1, 0 ] ), null, 'getDateArr( [ 2021, 1, 0 ] )' );
assert.deepStrictEqual( getDateArr( [ 2021, 1, 1 ] ), { year: 2021, month: 1, day: 1 }, 'getDateArr( [ 2021, 1, 1 ] )' );
