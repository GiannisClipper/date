import { assert } from './assert.js';
import { convertToDateArr } from '../src/convertToDateArr.js';

function test_convertToDateArr() {
    assert.strictEqual( convertToDateArr(), null, 'convertToDateArr()' );
    assert.strictEqual( convertToDateArr( 2021 ), null, 'convertToDateArr( 2021 )' );
    assert.strictEqual( convertToDateArr( 'bla.. bla..' ), null, 'convertToDateArr( "bla.. bla.." )' );
    assert.strictEqual( convertToDateArr( '31/01/21' ), null, 'convertToDateArr( "31/01/21" )' );
    assert.strictEqual( convertToDateArr( '31012021' ), null, 'convertToDateArr( "31012021" )' );
    assert.deepStrictEqual( convertToDateArr( '20210131' ), [ 31, 1, 2021 ], 'convertToDateArr( "20210131" )' );
}

console.log( 'Testing convertToDateArr...' );
test_convertToDateArr();
