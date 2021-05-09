import { assert } from './assert.js';
import { opGreaterThanEqualTo } from '../src/opGreaterThanEqualTo.js';

function test_opGreaterThanEqualTo() {
    assert.strictEqual( opGreaterThanEqualTo(), null, 'opGreaterThanEqualTo()' );
    assert.strictEqual( opGreaterThanEqualTo( "20210101" ), null, 'opGreaterThanEqualTo( "20210101" )' );
    assert.strictEqual( opGreaterThanEqualTo( "20210101", "20210102" ), false, 'opGreaterThanEqualTo( "20210101", "20210102" )' );
    assert.strictEqual( opGreaterThanEqualTo( "20210102", "20210102" ), true, 'opGreaterThanEqualTo( "20210102", "20210102" )' );
    assert.strictEqual( opGreaterThanEqualTo( "20210103", "20210102" ), true, 'opGreaterThanEqualTo( "20210103", "20210102" )' );
    assert.strictEqual( opGreaterThanEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] ), true, 'opGreaterThanEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( opGreaterThanEqualTo( "20210101", "20210101", [] ), null, 'opGreaterThanEqualTo( "20210101", "20210101", [] )' );
}

console.log( 'Testing opGreaterThanEqualTo...' );
test_opGreaterThanEqualTo();
