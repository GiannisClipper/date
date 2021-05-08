import { assert } from './assert.js';
import { compareGreaterThan } from '../src/compareGreaterThan.js';

function test_compareGreaterThan() {
    assert.strictEqual( compareGreaterThan(), null, 'compareGreaterThan()' );
    assert.strictEqual( compareGreaterThan( "20210101" ), null, 'compareGreaterThan( "20210101" )' );
    assert.strictEqual( compareGreaterThan( "20210101", "20210102" ), false, 'compareGreaterThan( "20210101", "20210102" )' );
    assert.strictEqual( compareGreaterThan( "20210102", "20210102" ), false, 'compareGreaterThan( "20210102", "20210102" )' );
    assert.strictEqual( compareGreaterThan( "20210103", "20210102" ), true, 'compareGreaterThan( "20210103", "20210102" )' );
    assert.strictEqual( compareGreaterThan( "20210101", "20210101", [ 1, 1, 2021 ] ), false, 'compareGreaterThan( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( compareGreaterThan( "20210101", "20210101", [] ), null, 'compareGreaterThan( "20210101", "20210101", [] )' );
}

console.log( 'Testing compareGreaterThan...' );
test_compareGreaterThan();
