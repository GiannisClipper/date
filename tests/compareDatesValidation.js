import { assert } from './assert.js';
import { compareDatesValidation } from '../src/compareDatesValidation.js';

function test_compareDatesValidation() {
    assert.strictEqual( compareDatesValidation(), false, 'compareDatesValidation()' );
    assert.strictEqual( compareDatesValidation( [ '20210101' ] ), false, 'compareDatesValidation( "20210101" )' );
    assert.strictEqual( compareDatesValidation( [ '20210101', 'bla.. bla..' ] ), false, 'compareDatesValidation( "20210101", "bla.. bla.." )' );
    assert.strictEqual( compareDatesValidation( [ '20210101', [ 1, 1, -1 ] ] ), false, 'compareDatesValidation( "20210101", [ 1, 1, -1 ] )' );
    assert.strictEqual( compareDatesValidation( [ '20210101', [ 31, 1, 2021 ] ] ), true, 'compareDatesValidation( "20210101", [ 31, 1, 2021 ] )' );
}

console.log( 'Testing compareDatesValidation...' );
test_compareDatesValidation();
