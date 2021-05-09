import { assert } from './assert.js';
import { setDateRepr } from '../src/setDateRepr.js';

function test_setDateRepr() {
    assert.strictEqual( setDateRepr(), null, 'setDateRepr()' );

    assert.strictEqual( setDateRepr( 2021 ), null, 'setDateRepr( 2021 )' );

    assert.strictEqual( setDateRepr( '01012021' ), null, 'setDateRepr( "01012021" )' );
    assert.strictEqual( setDateRepr( '20210101' ), '01/01/2021', 'setDateRepr( "20210101" )' );

    assert.strictEqual( setDateRepr( [] ), null, 'setDateRepr( [] )' );
    assert.strictEqual( setDateRepr( [ 31, 'Jan', 2021 ] ), null, 'setDateRepr( [ 31, "Jan", 2021 ] )' );
    assert.strictEqual( setDateRepr( [ 1, 1, 2021 ] ), '01/01/2021', 'setDateRepr( [ 1, 1, 2021 ] )' );
    assert.strictEqual( setDateRepr( [ 31, 1, 2021 ] ), '31/01/2021', 'setDateRepr( [ 31, 1, 2021 ] )' );

    assert.strictEqual( setDateRepr( new Date( "bla.. bla.." ) ), null, 'setDateRepr( new Date( "bla.. bla.." ) )' );
    assert.strictEqual( setDateRepr( new Date( 2021, 0, 31 ) ), '31/01/2021', 'setDateRepr( new Date( 2021, 0, 31 ) )' );
}

console.log( 'Testing setDateRepr...' );
test_setDateRepr();
