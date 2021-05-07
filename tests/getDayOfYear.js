import { assert } from './assert.js';
import { getDayOfYear } from '../src/getDayOfYear.js';

function test_getDayOfYear() {
    assert.strictEqual( getDayOfYear(), null, 'getDayOfYear()' );
    assert.strictEqual( getDayOfYear( 1 ), null, 'getDayOfYear( 1 )' );
    assert.strictEqual( getDayOfYear( [ 1, 1, 2021 ] ), 1, 'getDayOfYear( [ 1, 1, 2021 ] )' );
    assert.strictEqual( getDayOfYear( [ 31, 12, 2021 ] ), 365, 'getDayOfYear( [ 31, 12, 2021 ] )' );
    assert.strictEqual( getDayOfYear( [ 1, 3, 2021 ] ), 60, 'getDayOfYear( [ 1, 3, 2021 ] )' );
    assert.strictEqual( getDayOfYear( [ 1, 3, 2024 ] ), 61, 'getDayOfYear( [ 1, 3, 2024 ] )' );
    assert.strictEqual( getDayOfYear( '' ), null, 'getDayOfYear( "" )' );
    assert.strictEqual( getDayOfYear( 'bla.. bla..' ), null, 'getDayOfYear( "bla.. bla.." )' );
    assert.strictEqual( getDayOfYear( '20210101' ), 1, 'getDayOfYear( "20210101" )' );
    assert.strictEqual( getDayOfYear( '20211231' ), 365, 'getDayOfYear( "20211231" )' );
    assert.strictEqual( getDayOfYear( '20241231' ), 366, 'getDayOfYear( "20241231" )' );
}

console.log( 'Testing getDayOfYear...' );
test_getDayOfYear();
