import { assert } from './assert.js';
import { convertToDateArr } from '../src/convertToDateArr.js';

function test_convertToDateArr() {

    assert.strictEqual( convertToDateArr(), null, 'convertToDateArr()' );

    assert.strictEqual( convertToDateArr( 2021 ), null, 'convertToDateArr( 2021 )' );

    assert.strictEqual( convertToDateArr( 'bla.. bla..' ), null, 'convertToDateArr( "bla.. bla.." )' );
    assert.strictEqual( convertToDateArr( '31/01/21' ), null, 'convertToDateArr( "31/01/21" )' );
    assert.deepStrictEqual( convertToDateArr( '20210131' ), [ 31, 1, 2021 ], 'convertToDateArr( "20210131" )' );

    assert.strictEqual( convertToDateArr( [] ), null, 'convertToDateArr( [] )' );
    assert.deepStrictEqual( convertToDateArr( [ 31, 1, 2021 ] ), [ 31, 1, 2021 ], 'convertToDateArr( [ 31, 1, 2021 ] )' );

    assert.deepStrictEqual( convertToDateArr( new Date( 2021, 0, 31 ) ), [ 31, 1, 2021 ], 'convertToDateArr( new Date( 2021, 0, 31 ) )' );
    assert.strictEqual( convertToDateArr( new Date( "bla.. bla.." ) ), null, 'convertToDateArr( new Date( "bla.. bla.." ) )' );
}

console.log( 'Testing convertToDateArr...' );
test_convertToDateArr();
