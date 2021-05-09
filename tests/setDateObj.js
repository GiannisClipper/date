import { assert } from './assert.js';
import { setDateObj } from '../src/setDateObj.js';

function test_setDateObj() {
    assert.strictEqual( setDateObj(), null, 'setDateObj()' );

    assert.strictEqual( setDateObj( 2021 ), null, 'setDateObj( 2021 )' );

    assert.strictEqual( setDateObj( '01012021' ), null, 'setDateObj( "01012021" )' );
    assert.deepStrictEqual( setDateObj( '20210101' ), new Date( 2021, 0, 1, 12 ), 'setDateObj( "20210101" )' );

    assert.strictEqual( setDateObj( [] ), null, 'setDateObj( [] )' );
    assert.strictEqual( setDateObj( [ 1, 1, 1, 1 ] ), null, 'setDateObj( [ 1, 1, 1, 1 ] )' );
    assert.deepStrictEqual( setDateObj( [ 1, 1, 2021 ] ), new Date( 2021, 0, 1, 12 ), 'setDateObj( [ 1, 1, 2021 ] )' );

    assert.deepStrictEqual( setDateObj( new Date( 2021, 0, 31 ) ), new Date( 2021, 0, 31, 12 ), 'setDateObj( new Date( 2021, 0, 31 ) )' );
}

console.log( 'Testing setDateObj...' );
test_setDateObj();
