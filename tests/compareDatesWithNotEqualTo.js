import { assert } from './assert.js';
import { compareDatesWithNotEqualTo } from '../src/compareDatesWithNotEqualTo.js';

function test_compareDatesWithNotEqualTo() {
    assert.strictEqual( compareDatesWithNotEqualTo(), null, 'compareDatesWithNotEqualTo()' );
    assert.strictEqual( compareDatesWithNotEqualTo( "20210101" ), null, 'compareDatesWithNotEqualTo( "20210101" )' );
    assert.strictEqual( compareDatesWithNotEqualTo( "20210101", "20210102" ), true, 'compareDatesWithNotEqualTo( "20210101", "20210102" )' );
    assert.strictEqual( compareDatesWithNotEqualTo( "20210102", "20210102" ), false, 'compareDatesWithNotEqualTo( "20210102", "20210102" )' );
    assert.strictEqual( compareDatesWithNotEqualTo( "20210103", "20210102" ), true, 'compareDatesWithNotEqualTo( "20210103", "20210102" )' );
    assert.strictEqual( compareDatesWithNotEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] ), false, 'compareDatesWithNotEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( compareDatesWithNotEqualTo( "20210101", "20210101", [] ), null, 'compareDatesWithNotEqualTo( "20210101", "20210101", [] )' );
}

console.log( 'Testing compareDatesWithNotEqualTo...' );
test_compareDatesWithNotEqualTo();
