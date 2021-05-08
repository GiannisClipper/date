import { assert } from './assert.js';
import { isDateStr } from '../src/isDateStr.js';

function test_isDateStr() {
    assert.strictEqual( isDateStr(), false, 'isDateStr()' );
    assert.strictEqual( isDateStr( 123 ), false, 'isDateStr( 123 )' );
    assert.strictEqual( isDateStr( [ 31, 1, 2021 ] ), false, 'isDateStr( [ 31, 1, 2021 ] )' );
    assert.strictEqual( isDateStr( "31012021" ), false, 'isDateStr( "31012021" )' );
    assert.strictEqual( isDateStr( "20210101" ), true, 'isDateStr( "20210101" )' );
    assert.strictEqual( isDateStr( "20210101 bla.. bla.." ), false, 'isDateStr( "20210101 bla.. bla.." )' );
}

console.log( 'Testing isDateStr...' );
test_isDateStr();
