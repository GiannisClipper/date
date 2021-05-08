import { assert } from './assert.js';
import { compareDatesWithEqualTo } from '../src/compareDatesWithEqualTo.js';

function test_compareDatesWithEqualTo() {
    assert.strictEqual( compareDatesWithEqualTo(), null, 'compareDatesWithEqualTo()' );
    assert.strictEqual( compareDatesWithEqualTo( "20210101" ), null, 'compareDatesWithEqualTo( "20210101" )' );
    assert.strictEqual( compareDatesWithEqualTo( "20210101", "20210102" ), false, 'compareDatesWithEqualTo( "20210101", "20210102" )' );
    assert.strictEqual( compareDatesWithEqualTo( "20210102", "20210102" ), true, 'compareDatesWithEqualTo( "20210102", "20210102" )' );
    assert.strictEqual( compareDatesWithEqualTo( "20210103", "20210102" ), false, 'compareDatesWithEqualTo( "20210103", "20210102" )' );
    assert.strictEqual( compareDatesWithEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] ), true, 'compareDatesWithEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( compareDatesWithEqualTo( "20210101", "20210101", [] ), null, 'compareDatesWithEqualTo( "20210101", "20210101", [] )' );
}

console.log( 'Testing compareDatesWithEqualTo...' );
test_compareDatesWithEqualTo();
