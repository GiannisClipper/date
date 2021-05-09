import { assert } from './assert.js';
import { opGreaterThan } from '../src/opGreaterThan.js';

function test_opGreaterThan() {
    assert.strictEqual( opGreaterThan(), null, 'opGreaterThan()' );
    assert.strictEqual( opGreaterThan( "20210101" ), null, 'opGreaterThan( "20210101" )' );
    assert.strictEqual( opGreaterThan( "20210101", "20210102" ), false, 'opGreaterThan( "20210101", "20210102" )' );
    assert.strictEqual( opGreaterThan( "20210102", "20210102" ), false, 'opGreaterThan( "20210102", "20210102" )' );
    assert.strictEqual( opGreaterThan( "20210103", "20210102" ), true, 'opGreaterThan( "20210103", "20210102" )' );
    assert.strictEqual( opGreaterThan( "20210101", "20210101", [ 1, 1, 2021 ] ), false, 'opGreaterThan( "20210101", "20210101", [ 1, 1, 2021 ] )' );
    assert.strictEqual( opGreaterThan( "20210101", "20210101", [] ), null, 'opGreaterThan( "20210101", "20210101", [] )' );
}

console.log( 'Testing opGreaterThan...' );
test_opGreaterThan();
