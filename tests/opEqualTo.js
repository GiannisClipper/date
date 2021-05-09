import { assert } from './assert.js';
import { opEqualTo } from '../src/opEqualTo.js';

console.log( 'Testing opEqualTo...' );

assert.strictEqual( opEqualTo(), null, 'opEqualTo()' );
assert.strictEqual( opEqualTo( 2021 ), null, 'opEqualTo( 2021 )' );
assert.strictEqual( opEqualTo( "20210101", 2021 ), null, 'opEqualTo( "20210101", 2021 )' );

assert.strictEqual( opEqualTo( "20210101", [ 2, 1, 2021 ] ), false, 'opEqualTo( "20210101", [ 2, 1, 2021 ] )' );
assert.strictEqual( opEqualTo( "01/01/2021", new Date( 2021, 0 , 2 ) ), false, 'opEqualTo( "01/01/2021", new Date( 2021, 0 , 2 ) )' );

assert.strictEqual( opEqualTo( "20210102", [ 2, 1, 2021 ] ), true, 'opEqualTo( "20210102", [ 2, 1, 2021 ] )' );
assert.strictEqual( opEqualTo( "02/01/2021", new Date( 2021, 0 , 2 ) ), true, 'opEqualTo( "02/01/2021", new Date( 2021, 0 , 2 ) )' );

assert.strictEqual( opEqualTo( "20210103", [ 2, 1, 2021 ] ), false, 'opEqualTo( "20210103", [ 2, 1, 2021 ] )' );
assert.strictEqual( opEqualTo( "03/01/2021", new Date( 2021, 0 , 2 ) ), false, 'opEqualTo( "03/01/2021", new Date( 2021, 0 , 2 ) )' );
