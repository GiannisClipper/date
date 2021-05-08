import { assert } from './assert.js';
import { findDayOfWeek } from '../src/findDayOfWeek.js';

function test_findDayOfWeek() {
    assert.strictEqual( findDayOfWeek(), null, 'findDayOfWeek()' );
    assert.strictEqual( findDayOfWeek( [] ), null, 'findDayOfWeek( [] )' );
    assert.strictEqual( findDayOfWeek( [ "bla.. bla.." ] ), null, 'findDayOfWeek( [ "bla... bla..." ] )' );
    assert.strictEqual( findDayOfWeek( [ 6, 5, 2021 ] ), 4, 'findDayOfWeek( [ 6, 5, 2021 ] )' );
    assert.strictEqual( findDayOfWeek( '' ), null, 'findDayOfWeek( ""' );
    assert.strictEqual( findDayOfWeek( 'bla.. bla..' ), null, 'findDayOfWeek( "bla.. bla.." )' );
    assert.strictEqual( findDayOfWeek( '20210315' ), 1, 'findDayOfWeek( "20210315" )' );
    assert.strictEqual( findDayOfWeek( '20210325' ), 4, 'findDayOfWeek( "20210325" )' );
    assert.strictEqual( findDayOfWeek( '20210502' ), 7, 'findDayOfWeek( "20210502" )' );
    assert.strictEqual( findDayOfWeek( '20200918' ), 5, 'findDayOfWeek( "20200918" )' );
}

console.log( 'Testing findDayOfWeek...' );
test_findDayOfWeek();

