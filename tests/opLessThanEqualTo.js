import { assert } from './assert.js';
import { opLessThanEqualTo } from '../src/opLessThanEqualTo.js';

console.log( 'Testing opLessThanEqualTo...' );

assert.strictEqual( opLessThanEqualTo(), null, 'opLessThanEqualTo()' );
assert.strictEqual( opLessThanEqualTo( 2021 ), null, 'opLessThanEqualTo( 2021 )' );
assert.strictEqual( opLessThanEqualTo( "20210101", 2021 ), null, 'opLessThanEqualTo( "20210101", 2021 )' );

assert.strictEqual( opLessThanEqualTo( "20210101", [ 2, 1, 2021 ] ), true, 'opLessThanEqualTo( "20210101", [ 2, 1, 2021 ] )' );
assert.strictEqual( opLessThanEqualTo( "01/01/2021", new Date( 2021, 0 ,2 ) ), true, 'opLessThanEqualTo( "01/01/2021", new Date( 2021, 0 , 2 ) )' );

assert.strictEqual( opLessThanEqualTo( "20210102", [ 2, 1, 2021 ] ), true, 'opLessThanEqualTo( "20210102", [ 2, 1, 2021 ] )' );
assert.strictEqual( opLessThanEqualTo( "02/01/2021", new Date( 2021, 0 ,2 ) ), true, 'opLessThanEqualTo( "02/01/2021", new Date( 2021, 0 , 2 ) )' );

assert.strictEqual( opLessThanEqualTo( "20210103", [ 2, 1, 2021 ] ), false, 'opLessThanEqualTo( "20210103", [ 2, 1, 2021 ] )' );
assert.strictEqual( opLessThanEqualTo( "03/01/2021", new Date( 2021, 0 ,2 ) ), false, 'opLessThanEqualTo( "03/01/2021", new Date( 2021, 0 , 2 ) )' );
