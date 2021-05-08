import { assert } from './assert.js';
import { compareLessThan } from '../src/compareLessThan.js';

function test_compareLessThan() {
    assert.strictEqual( compareLessThan(), null, 'compareLessThan()' );
    assert.strictEqual( compareLessThan( "20210101" ), null, 'compareLessThan( "20210101" )' );
    assert.strictEqual( compareLessThan( "20210101", "20210102" ), true, 'compareLessThan( "20210101", "20210102" )' );
    assert.strictEqual( compareLessThan( "20210102", "20210102" ), false, 'compareLessThan( "20210102", "20210102" )' );
    assert.strictEqual( compareLessThan( "20210103", "20210102" ), false, 'compareLessThan( "20210103", "20210102" )' );
    assert.strictEqual( compareLessThan( "20210101", "20210101", [ 1, 1, 2021 ] ), false, 'compareLessThan( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( compareLessThan( "20210101", "20210101", [] ), null, 'compareLessThan( "20210101", "20210101", [] )' );
}

console.log( 'Testing compareLessThan...' );
test_compareLessThan();
