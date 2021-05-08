import { assert } from './assert.js';
import { compareDatesWithLessThan } from '../src/compareDatesWithLessThan.js';

function test_compareDatesWithLessThan() {
    assert.strictEqual( compareDatesWithLessThan(), null, 'compareDatesWithLessThan()' );
    assert.strictEqual( compareDatesWithLessThan( "20210101" ), null, 'compareDatesWithLessThan( "20210101" )' );
    assert.strictEqual( compareDatesWithLessThan( "20210101", "20210102" ), true, 'compareDatesWithLessThan( "20210101", "20210102" )' );
    assert.strictEqual( compareDatesWithLessThan( "20210102", "20210102" ), false, 'compareDatesWithLessThan( "20210102", "20210102" )' );
    assert.strictEqual( compareDatesWithLessThan( "20210103", "20210102" ), false, 'compareDatesWithLessThan( "20210103", "20210102" )' );
    assert.strictEqual( compareDatesWithLessThan( "20210101", "20210101", [ 1, 1, 2021 ] ), false, 'compareDatesWithLessThan( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( compareDatesWithLessThan( "20210101", "20210101", [] ), null, 'compareDatesWithLessThan( "20210101", "20210101", [] )' );
}

console.log( 'Testing compareDatesWithLessThan...' );
test_compareDatesWithLessThan();
