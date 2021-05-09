import { assert } from './assert.js';
import { opLessThanEqualTo } from '../src/opLessThanEqualTo.js';

function test_opLessThanEqualTo() {
    assert.strictEqual( opLessThanEqualTo(), null, 'opLessThanEqualTo()' );
    assert.strictEqual( opLessThanEqualTo( "20210101" ), null, 'opLessThanEqualTo( "20210101" )' );
    assert.strictEqual( opLessThanEqualTo( "20210101", "20210102" ), true, 'opLessThanEqualTo( "20210101", "20210102" )' );
    assert.strictEqual( opLessThanEqualTo( "20210102", "20210102" ), true, 'opLessThanEqualTo( "20210102", "20210102" )' );
    assert.strictEqual( opLessThanEqualTo( "20210103", "20210102" ), false, 'opLessThanEqualTo( "20210103", "20210102" )' );
    assert.strictEqual( opLessThanEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] ), true, 'opLessThanEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( opLessThanEqualTo( "20210101", "20210101", [] ), null, 'opLessThanEqualTo( "20210101", "20210101", [] )' );
}

console.log( 'Testing opLessThanEqualTo...' );
test_opLessThanEqualTo();
