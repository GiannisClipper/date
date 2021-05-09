import { assert } from './assert.js';
import { convertToDateStr } from '../src/convertToDateStr.js';

function test_convertToDateStr() {
    assert.strictEqual( convertToDateStr(), null, 'convertToDateStr()' );

    assert.strictEqual( convertToDateStr( 2021 ), null, 'convertToDateStr( 2021 )' );

    assert.strictEqual( convertToDateStr( '01012021' ), null, 'convertToDateStr( "01012021" )' );
    assert.strictEqual( convertToDateStr( '20210101' ), '20210101', 'convertToDateStr( "20210101" )' );

    assert.strictEqual( convertToDateStr( [] ), null, 'convertToDateStr( [] )' );
    assert.strictEqual( convertToDateStr( [ 31, 'Jan', 2021 ] ), null, 'convertToDateStr( [ 31, "Jan", 2021 ] )' );
    assert.strictEqual( convertToDateStr( [ 1, 1, 2021 ] ), '20210101', 'convertToDateStr( [ 1, 1, 2021 ] )' );
    assert.strictEqual( convertToDateStr( [ 31, 1, 2021 ] ), '20210131', 'convertToDateStr( [ 31, 1, 2021 ] )' );

    assert.strictEqual( convertToDateStr( new Date( "bla.. bla.." ) ), null, 'convertToDateStr( new Date( "bla.. bla.." ) )' );
    assert.strictEqual( convertToDateStr( new Date( 2021, 0, 31 ) ), '20210131', 'convertToDateStr( new Date( 2021, 0, 31 ) )' );
}

console.log( 'Testing convertToDateStr...' );
test_convertToDateStr();
