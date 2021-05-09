import { assert } from './assert.js';
import { getDateDate } from '../src/getDateDate.js';

function test_getDateDate() {
    assert.strictEqual( getDateDate(), null, 'getDateDate()' );
    assert.strictEqual( getDateDate( null ), null, 'getDateDate( null )' );
    assert.strictEqual( getDateDate( NaN ), null, 'getDateDate( Nan )' );
    assert.strictEqual( getDateDate( 123 ), null, 'getDateDate( 123 )' );
    assert.strictEqual( getDateDate( 'bla.. bla..' ), null, 'getDateDate( "bla.. bla.." )' );
    assert.strictEqual( getDateDate( [] ), null, 'getDateDate( [] )' );
    assert.strictEqual( getDateDate( {} ), null, 'getDateDate( {} )' );
    assert.strictEqual( getDateDate( new Date( 'bla.. bla..' ) ), null, 'getDateDate( new Date( "bla.. bla.." ) )' );
    assert.deepStrictEqual( getDateDate( new Date( 2021, 0, 1 ) ), { day: 1, month: 1, year: 2021 }, 'getDateDate( new Date( 2021, 0, 1 ) )' );
}

console.log( 'Testing getDateDate...' );
test_getDateDate();
