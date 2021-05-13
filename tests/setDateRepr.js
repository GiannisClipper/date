import { assert } from './assert.js';
import { setDateRepr } from '../src/setDateRepr.js';

console.log( 'Testing setDateRepr...' );

assert.strictEqual( setDateRepr(), null, 'setDateRepr()' );

assert.strictEqual( setDateRepr( 2021 ), null, 'setDateRepr( 2021 )' );

assert.strictEqual( setDateRepr( '01012021' ), null, 'setDateRepr( "01012021" )' );
assert.strictEqual( setDateRepr( '20210101' ), '01/01/2021', 'setDateRepr( "20210101" )' );

assert.strictEqual( setDateRepr( [] ), null, 'setDateRepr( [] )' );
assert.strictEqual( setDateRepr( [ 31, 'Jan', 2021 ] ), null, 'setDateRepr( [ 31, "Jan", 2021 ] )' );
assert.strictEqual( setDateRepr( [ 2021, 1, 1 ] ), '01/01/2021', 'setDateRepr( [ 2021, 1, 1 ] )' );
assert.strictEqual( setDateRepr( [ 2021, 1, 31 ] ), '31/01/2021', 'setDateRepr( [ 2021, 1, 31 ] )' );

assert.strictEqual( setDateRepr( new Date( "bla.. bla.." ) ), null, 'setDateRepr( new Date( "bla.. bla.." ) )' );
assert.strictEqual( setDateRepr( new Date( 2021, 0, 31 ) ), '31/01/2021', 'setDateRepr( new Date( 2021, 0, 31 ) )' );

assert.strictEqual( setDateRepr( '20210101', 'YYYY-MM-DD' ), '2021-01-01', 'setDateRepr( "20210101", "YYYY-MM-DD" )' );
assert.strictEqual( setDateRepr( '20210101', 'dd/mm/yy' ), '1/1/21', 'setDateRepr( "20210101", "dd/mm/yy" )' );
assert.strictEqual( setDateRepr( '20210131', 'yy/mm' ), '21/1', 'setDateRepr( "20210101", "YY/MM" )' );
