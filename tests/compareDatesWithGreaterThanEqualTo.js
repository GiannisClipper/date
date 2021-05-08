import { assert } from './assert.js';
import { compareDatesWithGreaterThanEqualTo } from '../src/compareDatesWithGreaterThanEqualTo.js';

function test_compareDatesWithGreaterThanEqualTo() {
    assert.strictEqual( compareDatesWithGreaterThanEqualTo(), null, 'compareDatesWithGreaterThanEqualTo()' );
    assert.strictEqual( compareDatesWithGreaterThanEqualTo( "20210101" ), null, 'compareDatesWithGreaterThanEqualTo( "20210101" )' );
    assert.strictEqual( compareDatesWithGreaterThanEqualTo( "20210101", "20210102" ), false, 'compareDatesWithGreaterThanEqualTo( "20210101", "20210102" )' );
    assert.strictEqual( compareDatesWithGreaterThanEqualTo( "20210102", "20210102" ), true, 'compareDatesWithGreaterThanEqualTo( "20210102", "20210102" )' );
    assert.strictEqual( compareDatesWithGreaterThanEqualTo( "20210103", "20210102" ), true, 'compareDatesWithGreaterThanEqualTo( "20210103", "20210102" )' );
    assert.strictEqual( compareDatesWithGreaterThanEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] ), true, 'compareDatesWithGreaterThanEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( compareDatesWithGreaterThanEqualTo( "20210101", "20210101", [] ), null, 'compareDatesWithGreaterThanEqualTo( "20210101", "20210101", [] )' );
}

console.log( 'Testing compareDatesWithGreaterThanEqualTo...' );
test_compareDatesWithGreaterThanEqualTo();
