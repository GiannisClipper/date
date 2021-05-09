import { assert } from './assert.js';
import { opLessThan } from '../src/opLessThan.js';

console.log( 'Testing opLessThan...' );

assert.strictEqual( opLessThan(), null, 'opLessThan()' );
assert.strictEqual( opLessThan( 2021 ), null, 'opLessThan( 2021 )' );
assert.strictEqual( opLessThan( "20210101", 2021 ), null, 'opLessThan( "20210101", 2021 )' );

assert.strictEqual( opLessThan( "20210101", [ 2, 1, 2021 ] ), true, 'opLessThan( "20210101", [ 2, 1, 2021 ] )' );
assert.strictEqual( opLessThan( "01/01/2021", new Date( 2021, 0 ,2 ) ), true, 'opLessThan( "01/01/2021", new Date( 2021, 0 , 2 ) )' );

assert.strictEqual( opLessThan( "20210102", [ 2, 1, 2021 ] ), false, 'opLessThan( "20210102", [ 2, 1, 2021 ] )' );
assert.strictEqual( opLessThan( "02/01/2021", new Date( 2021, 0 ,2 ) ), false, 'opLessThan( "02/01/2021", new Date( 2021, 0 , 2 ) )' );

assert.strictEqual( opLessThan( "20210103", [ 2, 1, 2021 ] ), false, 'opLessThan( "20210103", [ 2, 1, 2021 ] )' );
assert.strictEqual( opLessThan( "03/01/2021", new Date( 2021, 0 ,2 ) ), false, 'opLessThan( "03/01/2021", new Date( 2021, 0 , 2 ) )' );
