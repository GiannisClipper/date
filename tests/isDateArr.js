import { assert } from './assert.js';
import { isDateArr } from '../src/isDateArr.js';

function test_isDateArr() {
    assert.strictEqual( isDateArr(), false, 'isDateArr()' );
    assert.strictEqual( isDateArr( [ 1, 1 ] ), false, 'isDateArr( [ 1, 1 ] )' );
    assert.strictEqual( isDateArr( [ 1, 1, -1 ] ), false, 'isDateArr( [ 1, 1, -1 ] )' );
    assert.strictEqual( isDateArr( [ 1, 1, 2021 ] ), true, 'isDateArr( [ 1, 1, 2021 ] )' );
    assert.strictEqual( isDateArr( [ 31, 1, 2021 ] ), true, 'isDateArr( [ 31, 1, 2021 ] )' );
    assert.strictEqual( isDateArr( [ 31, 'Jan', 2021 ] ), false, 'isDateArr( [ 31, "Jan", 2021 ] )' );
    assert.strictEqual( isDateArr( [ null, 1, 2021 ] ), false, 'isDateArr( [ null, 1, 2021 ] )' );
    assert.strictEqual( isDateArr( [ 0, 1, 2021 ] ), false, 'isDateArr( [ 0, 1, 2021 ]' );
    assert.strictEqual( isDateArr( [ 30, 31, 1, 2021 ] ), false, 'isDateArr( [ 30, 31, 1, 2021 ] )' );
}

console.log( 'Testing isDateArr...' );
test_isDateArr();
