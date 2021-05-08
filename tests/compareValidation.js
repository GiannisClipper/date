import { assert } from './assert.js';
import { compareValidation } from '../src/compareValidation.js';

function test_compareValidation() {
    assert.strictEqual( compareValidation(), false, 'compareValidation()' );
    assert.strictEqual( compareValidation( [ '20210101' ] ), false, 'compareValidation( "20210101" )' );
    assert.strictEqual( compareValidation( [ '20210101', 'bla.. bla..' ] ), false, 'compareValidation( "20210101", "bla.. bla.." )' );
    assert.strictEqual( compareValidation( [ '20210101', [ 1, 1, -1 ] ] ), false, 'compareValidation( "20210101", [ 1, 1, -1 ] )' );
    assert.strictEqual( compareValidation( [ '20210101', [ 31, 1, 2021 ] ] ), true, 'compareValidation( "20210101", [ 31, 1, 2021 ] )' );
}

console.log( 'Testing compareValidation...' );
test_compareValidation();
