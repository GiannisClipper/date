import { assert } from './assert.js';
import { getDateRepr } from '../src/getDateRepr.js';

function test_getDateRepr() {
    assert.strictEqual( getDateRepr(), null, 'getDateRepr()' );
    assert.strictEqual( getDateRepr( null ), null, 'getDateRepr( null )' );
    assert.strictEqual( getDateRepr( NaN ), null, 'getDateRepr( Nan )' );
    assert.strictEqual( getDateRepr( 123 ), null, 'getDateRepr( 123 )' );
    assert.strictEqual( getDateRepr( 'bla.. bla..' ), null, 'getDateRepr( "bla.. bla.." )' );
    assert.strictEqual( getDateRepr( [] ), null, 'getDateRepr( [] )' );
    assert.strictEqual( getDateRepr( {} ), null, 'getDateRepr( {} )' );
    assert.strictEqual( getDateRepr( "20210101" ), null, 'getDateRepr( "20210101" )' );
    assert.deepStrictEqual( getDateRepr( "31/12/2021" ), { day: 31, month: 12, year: 2021 }, 'getDateRepr( "31/12/2021" )' );
}

console.log( 'Testing getDateRepr...' );
test_getDateRepr();
