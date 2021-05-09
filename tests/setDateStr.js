import { assert } from './assert.js';
import { setDateStr } from '../src/setDateStr.js';

function test_setDateStr() {
    assert.strictEqual( setDateStr(), null, 'setDateStr()' );

    assert.strictEqual( setDateStr( 2021 ), null, 'setDateStr( 2021 )' );

    assert.strictEqual( setDateStr( '01012021' ), null, 'setDateStr( "01012021" )' );
    assert.strictEqual( setDateStr( '20210101' ), '20210101', 'setDateStr( "20210101" )' );

    assert.strictEqual( setDateStr( [] ), null, 'setDateStr( [] )' );
    assert.strictEqual( setDateStr( [ 31, 'Jan', 2021 ] ), null, 'setDateStr( [ 31, "Jan", 2021 ] )' );
    assert.strictEqual( setDateStr( [ 1, 1, 2021 ] ), '20210101', 'setDateStr( [ 1, 1, 2021 ] )' );
    assert.strictEqual( setDateStr( [ 31, 1, 2021 ] ), '20210131', 'setDateStr( [ 31, 1, 2021 ] )' );

    assert.strictEqual( setDateStr( new Date( "bla.. bla.." ) ), null, 'setDateStr( new Date( "bla.. bla.." ) )' );
    assert.strictEqual( setDateStr( new Date( 2021, 0, 31 ) ), '20210131', 'setDateStr( new Date( 2021, 0, 31 ) )' );
}

console.log( 'Testing setDateStr...' );
test_setDateStr();
