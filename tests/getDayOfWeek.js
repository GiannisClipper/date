import { assert } from './assert.js';
import { getDayOfWeek } from '../src/getDayOfWeek.js';

function test_getDayOfWeek() {
    assert.strictEqual( getDayOfWeek(), null, 'getDayOfWeek()' );
    assert.strictEqual( getDayOfWeek( [] ), null, 'getDayOfWeek( [] )' );
    assert.strictEqual( getDayOfWeek( [ "bla.. bla.." ] ), null, 'getDayOfWeek( [ "bla... bla..." ] )' );
    assert.strictEqual( getDayOfWeek( [ 6, 5, 2021 ] ), 4, 'getDayOfWeek( [ 6, 5, 2021 ] )' );
    assert.strictEqual( getDayOfWeek( '' ), null, 'getDayOfWeek( ""' );
    assert.strictEqual( getDayOfWeek( 'bla.. bla..' ), null, 'getDayOfWeek( "bla.. bla.." )' );
    assert.strictEqual( getDayOfWeek( '20210315' ), 1, 'getDayOfWeek( "20210315" )' );
    assert.strictEqual( getDayOfWeek( '20210325' ), 4, 'getDayOfWeek( "20210325" )' );
    assert.strictEqual( getDayOfWeek( '20210502' ), 7, 'getDayOfWeek( "20210502" )' );
    assert.strictEqual( getDayOfWeek( '20200918' ), 5, 'getDayOfWeek( "20200918" )' );
}

console.log( 'Testing getDayOfWeek...' );
test_getDayOfWeek();

