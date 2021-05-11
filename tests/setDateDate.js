import { assert } from './assert.js';
import { setDateDate } from '../src/setDateDate.js';

function test_setDateDate() {
    assert.strictEqual( setDateDate(), null, 'setDateDate()' );

    assert.strictEqual( setDateDate( 2021 ), null, 'setDateDate( 2021 )' );

    assert.strictEqual( setDateDate( '01012021' ), null, 'setDateDate( "01012021" )' );
    assert.deepStrictEqual( setDateDate( '20210101' ), new Date( 2021, 0, 1, 12 ), 'setDateDate( "20210101" )' );

    assert.strictEqual( setDateDate( [] ), null, 'setDateDate( [] )' );
    assert.strictEqual( setDateDate( [ 1, 1, 1, 1 ] ), null, 'setDateDate( [ 1, 1, 1, 1 ] )' );
    assert.deepStrictEqual( setDateDate( [ 2021, 1, 1 ] ), new Date( 2021, 0, 1, 12 ), 'setDateDate( [ 2021, 1, 1 ] )' );

    assert.deepStrictEqual( setDateDate( new Date( 2021, 0, 31 ) ), new Date( 2021, 0, 31, 12 ), 'setDateDate( new Date( 2021, 0, 31 ) )' );
}

console.log( 'Testing setDateDate...' );
test_setDateDate();
