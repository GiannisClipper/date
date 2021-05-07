import { assert } from './assert.js';
import { getMonthDays } from '../src/getMonthDays.js';

function test_getMonthDays() {
    assert.strictEqual( getMonthDays( 1 ), null, 'getMonthDays( 1 )' );
    assert.strictEqual( getMonthDays( 1, 1 ), null, 'getMonthDays( 1, 1 )' );
    assert.strictEqual( getMonthDays( -1, 2021 ), null, 'getMonthDays( -1, 2021 )' );
    assert.strictEqual( getMonthDays( 0, 2021 ), null, 'getMonthDays( 0, 2021 )' );
    assert.strictEqual( getMonthDays( 1, 2021 ), 31, 'getMonthDays( 1, 2021 )' );
    assert.strictEqual( getMonthDays( 2, 2021 ), 28, 'getMonthDays( 2, 2021 )' );
    assert.strictEqual( getMonthDays( 2, 2024 ), 29, 'getMonthDays( 2, 2024 )' );
    assert.strictEqual( getMonthDays( 3, 2021 ), 31, 'getMonthDays( 3, 2021 )' );
    assert.strictEqual( getMonthDays( 4, 2021 ), 30, 'getMonthDays( 4, 2021 )' );
    assert.strictEqual( getMonthDays( 5, 2021 ), 31, 'getMonthDays( 5, 2021 )' );
    assert.strictEqual( getMonthDays( 6, 2021 ), 30, 'getMonthDays( 6, 2021 )' );
    assert.strictEqual( getMonthDays( 7, 2021 ), 31, 'getMonthDays( 7, 2021 )' );
    assert.strictEqual( getMonthDays( 8, 2021 ), 31, 'getMonthDays( 8, 2021 )' );
    assert.strictEqual( getMonthDays( 9, 2021 ), 30, 'getMonthDays( 9, 2021 )' );
    assert.strictEqual( getMonthDays( 10, 2021 ), 31, 'getMonthDays( 10, 2021 )' );
    assert.strictEqual( getMonthDays( 11, 2021 ), 30, 'getMonthDays( 11, 2021 )' );
    assert.strictEqual( getMonthDays( 12, 2021 ), 31, 'getMonthDays( 12, 2021 )' );
    assert.strictEqual( getMonthDays( 13, 2021 ), null, 'getMonthDays( 13, 2021 )' );
    assert.strictEqual( getMonthDays( "12", 2021 ), null, 'getMonthDays( "12", 2021 )' );
}

console.log( 'Testing getMonthDays...' );
test_getMonthDays();
