import { assert } from './assert.js';
import { compareLessThanEqualTo } from '../src/compareLessThanEqualTo.js';

function test_compareLessThanEqualTo() {
    assert.strictEqual( compareLessThanEqualTo(), null, 'compareLessThanEqualTo()' );
    assert.strictEqual( compareLessThanEqualTo( "20210101" ), null, 'compareLessThanEqualTo( "20210101" )' );
    assert.strictEqual( compareLessThanEqualTo( "20210101", "20210102" ), true, 'compareLessThanEqualTo( "20210101", "20210102" )' );
    assert.strictEqual( compareLessThanEqualTo( "20210102", "20210102" ), true, 'compareLessThanEqualTo( "20210102", "20210102" )' );
    assert.strictEqual( compareLessThanEqualTo( "20210103", "20210102" ), false, 'compareLessThanEqualTo( "20210103", "20210102" )' );
    assert.strictEqual( compareLessThanEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] ), true, 'compareLessThanEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( compareLessThanEqualTo( "20210101", "20210101", [] ), null, 'compareLessThanEqualTo( "20210101", "20210101", [] )' );
}

console.log( 'Testing compareLessThanEqualTo...' );
test_compareLessThanEqualTo();
