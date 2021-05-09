import { assert } from './assert.js';
import { setDateArr } from '../src/setDateArr.js';

function test_setDateArr() {

    assert.strictEqual( setDateArr(), null, 'setDateArr()' );

    assert.strictEqual( setDateArr( 2021 ), null, 'setDateArr( 2021 )' );

    assert.strictEqual( setDateArr( 'bla.. bla..' ), null, 'setDateArr( "bla.. bla.." )' );
    assert.strictEqual( setDateArr( '31/01/21' ), null, 'setDateArr( "31/01/21" )' );
    assert.deepStrictEqual( setDateArr( '20210131' ), [ 31, 1, 2021 ], 'setDateArr( "20210131" )' );

    assert.strictEqual( setDateArr( [] ), null, 'setDateArr( [] )' );
    assert.deepStrictEqual( setDateArr( [ 31, 1, 2021 ] ), [ 31, 1, 2021 ], 'setDateArr( [ 31, 1, 2021 ] )' );

    assert.deepStrictEqual( setDateArr( new Date( 2021, 0, 31 ) ), [ 31, 1, 2021 ], 'setDateArr( new Date( 2021, 0, 31 ) )' );
    assert.strictEqual( setDateArr( new Date( "bla.. bla.." ) ), null, 'setDateArr( new Date( "bla.. bla.." ) )' );
}

console.log( 'Testing setDateArr...' );
test_setDateArr();
