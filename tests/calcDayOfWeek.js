import { assert } from './assert.js';
import { calcDayOfWeek } from '../src/calcDayOfWeek.js';

function test_calcDayOfWeek() {
    assert.strictEqual( calcDayOfWeek(), null, 'calcDayOfWeek()' );
    assert.strictEqual( calcDayOfWeek( [] ), null, 'calcDayOfWeek( [] )' );
    assert.strictEqual( calcDayOfWeek( [ "bla.. bla.." ] ), null, 'calcDayOfWeek( [ "bla... bla..." ] )' );
    assert.strictEqual( calcDayOfWeek( [ 6, 5, 2021 ] ), 4, 'calcDayOfWeek( [ 6, 5, 2021 ] )' );
    assert.strictEqual( calcDayOfWeek( '' ), null, 'calcDayOfWeek( ""' );
    assert.strictEqual( calcDayOfWeek( 'bla.. bla..' ), null, 'calcDayOfWeek( "bla.. bla.." )' );
    assert.strictEqual( calcDayOfWeek( '20210315' ), 1, 'calcDayOfWeek( "20210315" )' );
    assert.strictEqual( calcDayOfWeek( '20210325' ), 4, 'calcDayOfWeek( "20210325" )' );
    assert.strictEqual( calcDayOfWeek( '20210502' ), 7, 'calcDayOfWeek( "20210502" )' );
    assert.strictEqual( calcDayOfWeek( '20200918' ), 5, 'calcDayOfWeek( "20200918" )' );
}

console.log( 'Testing calcDayOfWeek...' );
test_calcDayOfWeek();

