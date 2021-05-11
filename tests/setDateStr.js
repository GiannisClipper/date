import { assert } from './assert.js';
import { setDateStr } from '../src/setDateStr.js';

console.log( 'Testing setDateStr...' );

assert.strictEqual( setDateStr(), null, 'setDateStr()' );

assert.strictEqual( setDateStr( 2021 ), null, 'setDateStr( 2021 )' );

assert.strictEqual( setDateStr( '01012021' ), null, 'setDateStr( "01012021" )' );
assert.strictEqual( setDateStr( '20210101' ), '20210101', 'setDateStr( "20210101" )' );

assert.strictEqual( setDateStr( [] ), null, 'setDateStr( [] )' );
assert.strictEqual( setDateStr( [ 31, 'Jan', 2021 ] ), null, 'setDateStr( [ 31, "Jan", 2021 ] )' );
assert.strictEqual( setDateStr( [ 2021, 1, 1 ] ), '20210101', 'setDateStr( [ 2021, 1, 1 ] )' );
assert.strictEqual( setDateStr( [ 2021, 1, 31 ] ), '20210131', 'setDateStr( [ 2021, 1, 31 ] )' );

assert.strictEqual( setDateStr( new Date( "bla.. bla.." ) ), null, 'setDateStr( new Date( "bla.. bla.." ) )' );
assert.strictEqual( setDateStr( new Date( 2021, 0, 31 ) ), '20210131', 'setDateStr( new Date( 2021, 0, 31 ) )' );
