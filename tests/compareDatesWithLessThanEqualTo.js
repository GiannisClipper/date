import { assert } from './assert.js';
import { compareDatesWithLessThanEqualTo } from '../src/compareDatesWithLessThanEqualTo.js';

function test_compareDatesWithLessThanEqualTo() {
    assert.strictEqual( compareDatesWithLessThanEqualTo(), null, 'compareDatesWithLessThanEqualTo()' );
    assert.strictEqual( compareDatesWithLessThanEqualTo( "20210101" ), null, 'compareDatesWithLessThanEqualTo( "20210101" )' );
    assert.strictEqual( compareDatesWithLessThanEqualTo( "20210101", "20210102" ), true, 'compareDatesWithLessThanEqualTo( "20210101", "20210102" )' );
    assert.strictEqual( compareDatesWithLessThanEqualTo( "20210102", "20210102" ), true, 'compareDatesWithLessThanEqualTo( "20210102", "20210102" )' );
    assert.strictEqual( compareDatesWithLessThanEqualTo( "20210103", "20210102" ), false, 'compareDatesWithLessThanEqualTo( "20210103", "20210102" )' );
    assert.strictEqual( compareDatesWithLessThanEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] ), true, 'compareDatesWithLessThanEqualTo( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( compareDatesWithLessThanEqualTo( "20210101", "20210101", [] ), null, 'compareDatesWithLessThanEqualTo( "20210101", "20210101", [] )' );
}

console.log( 'Testing compareDatesWithLessThanEqualTo...' );
test_compareDatesWithLessThanEqualTo();
