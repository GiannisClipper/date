import { assert } from './assert.js';
import { getDateObj } from '../src/getDateObj.js';

function test_getDateObj() {
    assert.strictEqual( getDateObj(), null, 'getDateObj()' );
    assert.strictEqual( getDateObj( null ), null, 'getDateObj( null )' );
    assert.strictEqual( getDateObj( NaN ), null, 'getDateObj( Nan )' );
    assert.strictEqual( getDateObj( 123 ), null, 'getDateObj( 123 )' );
    assert.strictEqual( getDateObj( 'bla.. bla..' ), null, 'getDateObj( "bla.. bla.." )' );
    assert.strictEqual( getDateObj( [] ), null, 'getDateObj( [] )' );
    assert.strictEqual( getDateObj( {} ), null, 'getDateObj( {} )' );
    assert.strictEqual( getDateObj( new Date( 'bla.. bla..' ) ), null, 'getDateObj( new Date( "bla.. bla.." ) )' );
    assert.deepStrictEqual( getDateObj( new Date( 2021, 0, 1 ) ), { day: 1, month: 1, year: 2021 }, 'getDateObj( new Date( 2021, 0, 1 ) )' );
}

console.log( 'Testing getDateObj...' );
test_getDateObj();
