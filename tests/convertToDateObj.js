import { assert } from './assert.js';
import { convertToDateObj } from '../src/convertToDateObj.js';

function test_convertToDateObj() {
    assert.strictEqual( convertToDateObj(), null, 'convertToDateObj()' );

    assert.strictEqual( convertToDateObj( 2021 ), null, 'convertToDateObj( 2021 )' );

    assert.strictEqual( convertToDateObj( '01012021' ), null, 'convertToDateObj( "01012021" )' );
    assert.deepStrictEqual( convertToDateObj( '20210101' ), new Date( 2021, 0, 1, 12 ), 'convertToDateObj( "20210101" )' );

    assert.strictEqual( convertToDateObj( [] ), null, 'convertToDateObj( [] )' );
    assert.strictEqual( convertToDateObj( [ 1, 1, 1, 1 ] ), null, 'convertToDateObj( [ 1, 1, 1, 1 ] )' );
    assert.deepStrictEqual( convertToDateObj( [ 1, 1, 2021 ] ), new Date( 2021, 0, 1, 12 ), 'convertToDateObj( [ 1, 1, 2021 ] )' );

    assert.deepStrictEqual( convertToDateObj( new Date( 2021, 0, 31 ) ), new Date( 2021, 0, 31 ), 'convertToDateObj( new Date( 2021, 0, 31 ) )' );
}

console.log( 'Testing convertToDateObj...' );
test_convertToDateObj();
