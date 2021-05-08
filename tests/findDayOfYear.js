import { assert } from './assert.js';
import { findDayOfYear } from '../src/findDayOfYear.js';

function test_findDayOfYear() {
    assert.strictEqual( findDayOfYear(), null, 'findDayOfYear()' );
    assert.strictEqual( findDayOfYear( 1 ), null, 'findDayOfYear( 1 )' );
    assert.strictEqual( findDayOfYear( [ 1, 1, 2021 ] ), 1, 'findDayOfYear( [ 1, 1, 2021 ] )' );
    assert.strictEqual( findDayOfYear( [ 31, 12, 2021 ] ), 365, 'findDayOfYear( [ 31, 12, 2021 ] )' );
    assert.strictEqual( findDayOfYear( [ 1, 3, 2021 ] ), 60, 'findDayOfYear( [ 1, 3, 2021 ] )' );
    assert.strictEqual( findDayOfYear( [ 1, 3, 2024 ] ), 61, 'findDayOfYear( [ 1, 3, 2024 ] )' );
    assert.strictEqual( findDayOfYear( '' ), null, 'findDayOfYear( "" )' );
    assert.strictEqual( findDayOfYear( 'bla.. bla..' ), null, 'findDayOfYear( "bla.. bla.." )' );
    assert.strictEqual( findDayOfYear( '20210101' ), 1, 'findDayOfYear( "20210101" )' );
    assert.strictEqual( findDayOfYear( '20211231' ), 365, 'findDayOfYear( "20211231" )' );
    assert.strictEqual( findDayOfYear( '20241231' ), 366, 'findDayOfYear( "20241231" )' );
}

console.log( 'Testing findDayOfYear...' );
test_findDayOfYear();
