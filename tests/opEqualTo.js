import { assert } from './assert.js';
import { opEqualTo } from '../src/opEqualTo.js';

function test_opEqualTo() {
    assert.strictEqual( opEqualTo(), null, 'opEqualTo()' );
    assert.strictEqual( opEqualTo( "20210101" ), null, 'opEqualTo( "20210101" )' );
    assert.strictEqual( opEqualTo( "20210101", "20210102" ), false, 'opEqualTo( "20210101", "20210102" )' );
    assert.strictEqual( opEqualTo( "20210102", "20210102" ), true, 'opEqualTo( "20210102", "20210102" )' );
    assert.strictEqual( opEqualTo( "20210103", "20210102" ), false, 'opEqualTo( "20210103", "20210102" )' );
    assert.strictEqual( opEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] ), true, 'opEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( opEqualTo( "20210101", "20210101", [] ), null, 'opEqualTo( "20210101", "20210101", [] )' );
}

console.log( 'Testing opEqualTo...' );
test_opEqualTo();
