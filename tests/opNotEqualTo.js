import { assert } from './assert.js';
import { opNotEqualTo } from '../src/opNotEqualTo.js';

function test_opNotEqualTo() {
    assert.strictEqual( opNotEqualTo(), null, 'opNotEqualTo()' );
    assert.strictEqual( opNotEqualTo( "20210101" ), null, 'opNotEqualTo( "20210101" )' );
    assert.strictEqual( opNotEqualTo( "20210101", "20210102" ), true, 'opNotEqualTo( "20210101", "20210102" )' );
    assert.strictEqual( opNotEqualTo( "20210102", "20210102" ), false, 'opNotEqualTo( "20210102", "20210102" )' );
    assert.strictEqual( opNotEqualTo( "20210103", "20210102" ), true, 'opNotEqualTo( "20210103", "20210102" )' );
    assert.strictEqual( opNotEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] ), false, 'opNotEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( opNotEqualTo( "20210101", "20210101", [] ), null, 'opNotEqualTo( "20210101", "20210101", [] )' );
}

console.log( 'Testing opNotEqualTo...' );
test_opNotEqualTo();
