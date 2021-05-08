import { assert } from './assert.js';
import { compareDatesWithGreaterThan } from '../src/compareDatesWithGreaterThan.js';

function test_compareDatesWithGreaterThan() {
    assert.strictEqual( compareDatesWithGreaterThan(), null, 'compareDatesWithGreaterThan()' );
    assert.strictEqual( compareDatesWithGreaterThan( "20210101" ), null, 'compareDatesWithGreaterThan( "20210101" )' );
    assert.strictEqual( compareDatesWithGreaterThan( "20210101", "20210102" ), false, 'compareDatesWithGreaterThan( "20210101", "20210102" )' );
    assert.strictEqual( compareDatesWithGreaterThan( "20210102", "20210102" ), false, 'compareDatesWithGreaterThan( "20210102", "20210102" )' );
    assert.strictEqual( compareDatesWithGreaterThan( "20210103", "20210102" ), true, 'compareDatesWithGreaterThan( "20210103", "20210102" )' );
    assert.strictEqual( compareDatesWithGreaterThan( "20210101", "20210101", [ 1, 1, 2021 ] ), false, 'compareDatesWithGreaterThan( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( compareDatesWithGreaterThan( "20210101", "20210101", [] ), null, 'compareDatesWithGreaterThan( "20210101", "20210101", [] )' );
}

console.log( 'Testing compareDatesWithGreaterThan...' );
test_compareDatesWithGreaterThan();
