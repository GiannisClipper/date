import { assert } from './assert.js';
import { compareNotEqualTo } from '../src/compareNotEqualTo.js';

function test_compareNotEqualTo() {
    assert.strictEqual( compareNotEqualTo(), null, 'compareNotEqualTo()' );
    assert.strictEqual( compareNotEqualTo( "20210101" ), null, 'compareNotEqualTo( "20210101" )' );
    assert.strictEqual( compareNotEqualTo( "20210101", "20210102" ), true, 'compareNotEqualTo( "20210101", "20210102" )' );
    assert.strictEqual( compareNotEqualTo( "20210102", "20210102" ), false, 'compareNotEqualTo( "20210102", "20210102" )' );
    assert.strictEqual( compareNotEqualTo( "20210103", "20210102" ), true, 'compareNotEqualTo( "20210103", "20210102" )' );
    assert.strictEqual( compareNotEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] ), false, 'compareNotEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( compareNotEqualTo( "20210101", "20210101", [] ), null, 'compareNotEqualTo( "20210101", "20210101", [] )' );
}

console.log( 'Testing compareNotEqualTo...' );
test_compareNotEqualTo();
