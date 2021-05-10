import { assert } from './assert.js';
import { getDateRepr } from '../src/getDateRepr.js';

console.log( 'Testing getDateRepr...' );

assert.strictEqual( getDateRepr(), null, 'getDateRepr()' );
assert.strictEqual( getDateRepr( null ), null, 'getDateRepr( null )' );
assert.strictEqual( getDateRepr( NaN ), null, 'getDateRepr( Nan )' );
assert.strictEqual( getDateRepr( 123 ), null, 'getDateRepr( 123 )' );
assert.strictEqual( getDateRepr( 'bla.. bla..' ), null, 'getDateRepr( "bla.. bla.." )' );
assert.strictEqual( getDateRepr( [] ), null, 'getDateRepr( [] )' );
assert.strictEqual( getDateRepr( {} ), null, 'getDateRepr( {} )' );
assert.strictEqual( getDateRepr( "20210101" ), null, 'getDateRepr( "20210101" )' );

assert.deepStrictEqual( getDateRepr( "01/01/2021" ), { day: 1, month: 1, year: 2021 }, 'getDateRepr( "01/01/2021" )' );
assert.deepStrictEqual( getDateRepr( "2021-01-01", "YYYY-MM-DD" ), { day: 1, month: 1, year: 2021 }, 'getDateRepr( "2021-01-01", "YYYY-MM-DD" )' );

assert.deepStrictEqual( getDateRepr( "1/1/2021", "dd/mm/yyyy" ), { day: 1, month: 1, year: 2021 }, 'getDateRepr( "1/1/2021", "dd/mm/yyyy" )' );
assert.deepStrictEqual( getDateRepr( "2021-1-1", "YYYY-mm-dd" ), { day: 1, month: 1, year: 2021 }, 'getDateRepr( "2021-01-01", "YYYY-mm-dd" )' );
