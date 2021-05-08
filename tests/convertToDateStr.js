import { assert } from './assert.js';
import { convertToDateStr } from '../src/convertToDateStr.js';

function test_convertToDateStr() {
    assert.strictEqual( convertToDateStr(), null, 'convertToDateStr()' );
    assert.strictEqual( convertToDateStr( '01012021' ), null, 'convertToDateStr( "01012021" )' );
    assert.strictEqual( convertToDateStr( [ 1, 1 ] ), null, 'convertToDateStr( [ 1, 1 ] )' );
    assert.strictEqual( convertToDateStr( [ 1, 1, -1 ] ), null, 'convertToDateStr( [ 1, 1, -1 ] )' );
    assert.strictEqual( convertToDateStr( [ 1, 1, 2021 ] ), '20210101', 'convertToDateStr( [ 1, 1, 2021 ] )' );
    assert.strictEqual( convertToDateStr( [ 31, 1, 2021 ] ), '20210131', 'convertToDateStr( [ 31, 1, 2021 ] )' );
    assert.strictEqual( convertToDateStr( [ 31, 'Jan', 2021 ] ), null, 'convertToDateStr( [ 31, "Jan", 2021 ] )' );
    assert.strictEqual( convertToDateStr( [ null, 1, 2021 ] ), null, 'convertToDateStr( [ null, 1, 2021 ] )' );
    assert.strictEqual( convertToDateStr( [ 0, 1, 2021 ] ), null, 'convertToDateStr( [ 0, 1, 2021 ] )' );
    assert.strictEqual( convertToDateStr( [ 30, 31, 1, 2021 ] ), null, 'convertToDateStr( [ 30, 31, 1, 2021 ] )' );
}

console.log( 'Testing convertToDateStr...' );
test_convertToDateStr();
