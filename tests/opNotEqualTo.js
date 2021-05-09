import { assert } from './assert.js';
import { opNotEqualTo } from '../src/opNotEqualTo.js';

console.log( 'Testing opNotEqualTo...' );

assert.strictEqual( opNotEqualTo(), null, 'opNotEqualTo()' );
assert.strictEqual( opNotEqualTo( 2021 ), null, 'opNotEqualTo( 2021 )' );
assert.strictEqual( opNotEqualTo( "20210101", 2021 ), null, 'opNotEqualTo( "20210101", 2021 )' );

assert.strictEqual( opNotEqualTo( "20210101", [ 2, 1, 2021 ] ), true, 'opNotEqualTo( "20210101", [ 2, 1, 2021 ] )' );
assert.strictEqual( opNotEqualTo( "01/01/2021", new Date( 2021, 0 ,2 ) ), true, 'opNotEqualTo( "01/01/2021", new Date( 2021, 0 , 2 ) )' );

assert.strictEqual( opNotEqualTo( "20210102", [ 2, 1, 2021 ] ), false, 'opNotEqualTo( "20210102", [ 2, 1, 2021 ] )' );
assert.strictEqual( opNotEqualTo( "02/01/2021", new Date( 2021, 0 ,2 ) ), false, 'opNotEqualTo( "02/01/2021", new Date( 2021, 0 , 2 ) )' );

assert.strictEqual( opNotEqualTo( "20210103", [ 2, 1, 2021 ] ), true, 'opNotEqualTo( "20210103", [ 2, 1, 2021 ] )' );
assert.strictEqual( opNotEqualTo( "03/01/2021", new Date( 2021, 0 ,2 ) ), true, 'opNotEqualTo( "03/01/2021", new Date( 2021, 0 , 2 ) )' );
