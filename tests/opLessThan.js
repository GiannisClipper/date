import { assert } from './assert.js';
import { opLessThan } from '../src/opLessThan.js';

function test_opLessThan() {
    assert.strictEqual( opLessThan(), null, 'opLessThan()' );
    assert.strictEqual( opLessThan( "20210101" ), null, 'opLessThan( "20210101" )' );
    assert.strictEqual( opLessThan( "20210101", "20210102" ), true, 'opLessThan( "20210101", "20210102" )' );
    assert.strictEqual( opLessThan( "20210102", "20210102" ), false, 'opLessThan( "20210102", "20210102" )' );
    assert.strictEqual( opLessThan( "20210103", "20210102" ), false, 'opLessThan( "20210103", "20210102" )' );
    assert.strictEqual( opLessThan( "20210101", "20210101", [ 1, 1, 2021 ] ), false, 'opLessThan( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( opLessThan( "20210101", "20210101", [] ), null, 'opLessThan( "20210101", "20210101", [] )' );
}

console.log( 'Testing opLessThan...' );
test_opLessThan();
