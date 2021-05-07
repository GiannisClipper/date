import { assert } from './assert.js';
import { isYear } from '../src/isYear.js';

function test_isYear() {
    assert.strictEqual( isYear( "2021" ), false, 'isYear( "2021" )' );
    assert.strictEqual( isYear( 1800 ), false, 'isYear( 1800 )' );
    assert.strictEqual( isYear( 1800, 1800, 2100 ), true, 'isYear( 1800, 1800, 2100 )' );
    assert.strictEqual( isYear( 2021 ), true, 'isYear( 2000 )' );
}

console.log( 'Testing isYear...' );
test_isYear();
