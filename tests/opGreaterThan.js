import { assert } from './assert.js';
import { opGreaterThan } from '../src/opGreaterThan.js';

console.log( 'Testing opGreaterThan...' );

assert.strictEqual( opGreaterThan(), null, 'opGreaterThan()' );
assert.strictEqual( opGreaterThan( 2021 ), null, 'opGreaterThan( 2021 )' );
assert.strictEqual( opGreaterThan( "20210101", 2021 ), null, 'opGreaterThan( "20210101", 2021 )' );

assert.strictEqual( opGreaterThan( "20210101", [ 2, 1, 2021 ] ), false, 'opGreaterThan( "20210101", [ 2, 1, 2021 ] )' );
assert.strictEqual( opGreaterThan( "01/01/2021", new Date( 2021, 0 ,2 ) ), false, 'opGreaterThan( "01/01/2021", new Date( 2021, 0 , 2 ) )' );

assert.strictEqual( opGreaterThan( "20210102", [ 2, 1, 2021 ] ), false, 'opGreaterThan( "20210102", [ 2, 1, 2021 ] )' );
assert.strictEqual( opGreaterThan( "02/01/2021", new Date( 2021, 0 ,2 ) ), false, 'opGreaterThan( "02/01/2021", new Date( 2021, 0 , 2 ) )' );

assert.strictEqual( opGreaterThan( "20210103", [ 2, 1, 2021 ] ), true, 'opGreaterThan( "20210103", [ 2, 1, 2021 ] )' );
assert.strictEqual( opGreaterThan( "03/01/2021", new Date( 2021, 0 ,2 ) ), true, 'opGreaterThan( "03/01/2021", new Date( 2021, 0 , 2 ) )' );
