import { assert } from './assert.js';
import { compareGreaterThanEqualTo } from '../src/compareGreaterThanEqualTo.js';

function test_compareGreaterThanEqualTo() {
    assert.strictEqual( compareGreaterThanEqualTo(), null, 'compareGreaterThanEqualTo()' );
    assert.strictEqual( compareGreaterThanEqualTo( "20210101" ), null, 'compareGreaterThanEqualTo( "20210101" )' );
    assert.strictEqual( compareGreaterThanEqualTo( "20210101", "20210102" ), false, 'compareGreaterThanEqualTo( "20210101", "20210102" )' );
    assert.strictEqual( compareGreaterThanEqualTo( "20210102", "20210102" ), true, 'compareGreaterThanEqualTo( "20210102", "20210102" )' );
    assert.strictEqual( compareGreaterThanEqualTo( "20210103", "20210102" ), true, 'compareGreaterThanEqualTo( "20210103", "20210102" )' );
    assert.strictEqual( compareGreaterThanEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] ), true, 'compareGreaterThanEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( compareGreaterThanEqualTo( "20210101", "20210101", [] ), null, 'compareGreaterThanEqualTo( "20210101", "20210101", [] )' );
}

console.log( 'Testing compareGreaterThanEqualTo...' );
test_compareGreaterThanEqualTo();
