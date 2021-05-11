import { assert } from './assert.js';
import { opGreaterThanEqualTo } from '../src/opGreaterThanEqualTo.js';

console.log( 'Testing opGreaterThanEqualTo...' );

assert.strictEqual( opGreaterThanEqualTo(), null, 'opGreaterThanEqualTo()' );
assert.strictEqual( opGreaterThanEqualTo( 2021 ), null, 'opGreaterThanEqualTo( 2021 )' );
assert.strictEqual( opGreaterThanEqualTo( "20210101", 2021 ), null, 'opGreaterThanEqualTo( "20210101", 2021 )' );

assert.strictEqual( opGreaterThanEqualTo( "20210101", [ 2021, 1, 2 ] ), false, 'opGreaterThanEqualTo( "20210101", [ 2021, 1, 2 ] )' );
assert.strictEqual( opGreaterThanEqualTo( "01/01/2021", new Date( 2021, 0 ,2 ) ), false, 'opGreaterThanEqualTo( "01/01/2021", new Date( 2021, 0 , 2 ) )' );

assert.strictEqual( opGreaterThanEqualTo( "20210102", [ 2021, 1, 2 ] ), true, 'opGreaterThanEqualTo( "20210102", [ 2021, 1, 2 ] )' );
assert.strictEqual( opGreaterThanEqualTo( "02/01/2021", new Date( 2021, 0 ,2 ) ), true, 'opGreaterThanEqualTo( "02/01/2021", new Date( 2021, 0 , 2 ) )' );

assert.strictEqual( opGreaterThanEqualTo( "20210103", [ 2021, 1, 2 ] ), true, 'opGreaterThanEqualTo( "20210103", [ 2021, 1, 2 ] )' );
assert.strictEqual( opGreaterThanEqualTo( "03/01/2021", new Date( 2021, 0 ,2 ) ), true, 'opGreaterThanEqualTo( "03/01/2021", new Date( 2021, 0 , 2 ) )' );
