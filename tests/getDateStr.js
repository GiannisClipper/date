import { assert } from './assert.js';
import { getDateStr } from '../src/getDateStr.js';

function test_getDateStr() {
    assert.strictEqual( getDateStr(), null, 'getDateStr()' );
    assert.strictEqual( getDateStr( null ), null, 'getDateStr( null )' );
    assert.strictEqual( getDateStr( NaN ), null, 'getDateStr( Nan )' );
    assert.strictEqual( getDateStr( 123 ), null, 'getDateStr( 123 )' );
    assert.strictEqual( getDateStr( 'bla.. bla..' ), null, 'getDateStr( "bla.. bla.." )' );
    assert.strictEqual( getDateStr( [] ), null, 'getDateStr( [] )' );
    assert.strictEqual( getDateStr( {} ), null, 'getDateStr( {} )' );
    assert.strictEqual( getDateStr( "20210101 bla.. bla.." ), null, 'getDateStr( "20210101 bla.. bla.." )' );
    assert.deepStrictEqual( getDateStr( "20210101" ), { day: 1, month: 1, year: 2021 }, 'getDateStr( "20210101" )' );
}

console.log( 'Testing getDateStr...' );
test_getDateStr();
