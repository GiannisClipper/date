import { assert } from './assert.js';
import { asDateArr } from '../src/asDateArr.js';

function test_asDateArr() {
    assert.strictEqual( asDateArr(), null, 'asDateArr()' );
    assert.strictEqual( asDateArr( 2021 ), null, 'asDateArr( 2021 )' );
    assert.strictEqual( asDateArr( 'bla.. bla..' ), null, 'asDateArr( "bla.. bla.." )' );
    assert.strictEqual( asDateArr( '31/01/21' ), null, 'asDateArr( "31/01/21" )' );
    assert.strictEqual( asDateArr( '31012021' ), null, 'asDateArr( "31012021" )' );
    assert.deepStrictEqual( asDateArr( '20210131' ), [ 31, 1, 2021 ], 'asDateArr( "20210131" )' );
}

console.log( 'Testing asDateArr...' );
test_asDateArr();
