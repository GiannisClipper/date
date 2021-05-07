import { assert } from './assert.js';
import { isLeapYear } from '../src/isLeapYear.js';

function test_isLeapYear() {
    assert.strictEqual( isLeapYear( 1900 ), false, 'isLeapYear( 1900 )' );
    assert.strictEqual( isLeapYear( 1996 ), true, 'isLeapYear( 1996 )' );
    assert.strictEqual( isLeapYear( 1998 ), false, 'isLeapYear( 1998 )' );
    assert.strictEqual( isLeapYear( 2000 ), true, 'isLeapYear( 2000 )' );
    assert.strictEqual( isLeapYear( 2021 ), false, 'isLeapYear( 2021 )' );
}

console.log( 'Testing isLeapYear...' );
test_isLeapYear();
