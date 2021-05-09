import { assert } from './assert.js';
import { getDateArr } from '../src/getDateArr.js';

function test_getDateArr() {
    assert.strictEqual( getDateArr(), null, 'getDateArr()' );
    assert.strictEqual( getDateArr( null ), null, 'getDateArr( null )' );
    assert.strictEqual( getDateArr( NaN ), null, 'getDateArr( Nan )' );
    assert.strictEqual( getDateArr( 123 ), null, 'getDateArr( 123 )' );
    assert.strictEqual( getDateArr( 'bla.. bla..' ), null, 'getDateArr( "bla.. bla.." )' );
    assert.strictEqual( getDateArr( [] ), null, 'getDateArr( [] )' );
    assert.strictEqual( getDateArr( {} ), null, 'getDateArr( {} )' );
    assert.strictEqual( getDateArr( [ 0, 1, 2021 ] ), null, 'getDateArr( [ 32, 1, 2021 ] )' );
    assert.deepStrictEqual( getDateArr( [ 1, 1, 2021 ] ), { day: 1, month: 1, year: 2021 }, 'getDateArr( [ 1, 1, 2021 ] )' );
}

console.log( 'Testing getDateArr...' );
test_getDateArr();
