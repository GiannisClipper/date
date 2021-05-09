import { assert } from './assert.js';
import { calcDayOfYear } from '../src/calcDayOfYear.js';

console.log( 'Testing calcDayOfYear...' );

assert.strictEqual( calcDayOfYear(), null, 'calcDayOfYear()' );
assert.strictEqual( calcDayOfYear( 1 ), null, 'calcDayOfYear( 1 )' );
assert.strictEqual( calcDayOfYear( 'bla.. bla..' ), null, 'calcDayOfYear( "bla.. bla.." )' );

assert.strictEqual( calcDayOfYear( [ 1, 1, 2021 ] ), 1, 'calcDayOfYear( [ 1, 1, 2021 ] )' );
assert.strictEqual( calcDayOfYear( [ 31, 12, 2021 ] ), 365, 'calcDayOfYear( [ 31, 12, 2021 ] )' );
assert.strictEqual( calcDayOfYear( [ 1, 3, 2021 ] ), 60, 'calcDayOfYear( [ 1, 3, 2021 ] )' );
assert.strictEqual( calcDayOfYear( new Date( 2024, 2, 1 ) ), 61, 'calcDayOfYear( new Date( 2024, 2, 1 ) )' );
assert.strictEqual( calcDayOfYear( '20210101' ), 1, 'calcDayOfYear( "20210101" )' );
assert.strictEqual( calcDayOfYear( '20211231' ), 365, 'calcDayOfYear( "20211231" )' );
assert.strictEqual( calcDayOfYear( '31/12/2024' ), 366, 'calcDayOfYear( "31/12/2024" )' );

