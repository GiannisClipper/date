import { assert } from './assert.js';
import { opValidation } from '../src/opValidation.js';

function test_opValidation() {
    assert.strictEqual( opValidation(), false, 'opValidation()' );
    assert.strictEqual( opValidation( [ '20210101' ] ), false, 'opValidation( "20210101" )' );
    assert.strictEqual( opValidation( [ '20210101', 'bla.. bla..' ] ), false, 'opValidation( "20210101", "bla.. bla.." )' );
    assert.strictEqual( opValidation( [ '20210101', [ 1, 1, -1 ] ] ), false, 'opValidation( "20210101", [ 1, 1, -1 ] )' );
    assert.strictEqual( opValidation( [ '20210101', [ 31, 1, 2021 ] ] ), true, 'opValidation( "20210101", [ 31, 1, 2021 ] )' );
}

console.log( 'Testing opValidation...' );
test_opValidation();
