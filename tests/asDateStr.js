import { assert } from './assert.js';
import { asDateStr } from '../src/asDateStr.js';

function test_asDateStr() {
    assert.strictEqual( asDateStr(), null, 'asDateStr()' );
    assert.strictEqual( asDateStr( '01012021' ), null, 'asDateStr( "01012021" )' );
    assert.strictEqual( asDateStr( [ 1, 1 ] ), null, 'asDateStr( [ 1, 1 ] )' );
    assert.strictEqual( asDateStr( [ 1, 1, -1 ] ), null, 'asDateStr( [ 1, 1, -1 ] )' );
    assert.strictEqual( asDateStr( [ 1, 1, 2021 ] ), '20210101', 'asDateStr( [ 1, 1, 2021 ] )' );
    assert.strictEqual( asDateStr( [ 31, 1, 2021 ] ), '20210131', 'asDateStr( [ 31, 1, 2021 ] )' );
    assert.strictEqual( asDateStr( [ 31, 'Jan', 2021 ] ), null, 'asDateStr( [ 31, "Jan", 2021 ] )' );
    assert.strictEqual( asDateStr( [ null, 1, 2021 ] ), null, 'asDateStr( [ null, 1, 2021 ] )' );
    assert.strictEqual( asDateStr( [ 0, 1, 2021 ] ), null, 'asDateStr( [ 0, 1, 2021 ] )' );
    assert.strictEqual( asDateStr( [ 30, 31, 1, 2021 ] ), null, 'asDateStr( [ 30, 31, 1, 2021 ] )' );
}

console.log( 'Testing asDateStr...' );
test_asDateStr();
