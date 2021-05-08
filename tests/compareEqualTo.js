import { assert } from './assert.js';
import { compareEqualTo } from '../src/compareEqualTo.js';

function test_compareEqualTo() {
    assert.strictEqual( compareEqualTo(), null, 'compareEqualTo()' );
    assert.strictEqual( compareEqualTo( "20210101" ), null, 'compareEqualTo( "20210101" )' );
    assert.strictEqual( compareEqualTo( "20210101", "20210102" ), false, 'compareEqualTo( "20210101", "20210102" )' );
    assert.strictEqual( compareEqualTo( "20210102", "20210102" ), true, 'compareEqualTo( "20210102", "20210102" )' );
    assert.strictEqual( compareEqualTo( "20210103", "20210102" ), false, 'compareEqualTo( "20210103", "20210102" )' );
    assert.strictEqual( compareEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] ), true, 'compareEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( compareEqualTo( "20210101", "20210101", [] ), null, 'compareEqualTo( "20210101", "20210101", [] )' );
}

console.log( 'Testing compareEqualTo...' );
test_compareEqualTo();
