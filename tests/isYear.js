import { assert } from './assert.js';
import { isYear } from '../src/isYear.js';

function test_isYear() {
    assert.strictEqual( isYear( "2021" ), false, 'isYear( "2021" )' );
    assert.strictEqual( isYear( 1789 ), false, 'isYear( 1789 )' );
    assert.strictEqual( isYear( 2021 ), true, 'isYear( 2000 )' );
}

console.log( 'Testing isYear...' );
test_isYear();
