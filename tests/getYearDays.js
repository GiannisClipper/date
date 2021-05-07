import { assert } from './assert.js';
import { getYearDays } from '../src/getYearDays.js';

function test_getYearDays() {
    assert.strictEqual( getYearDays(), null, 'getYearDays()' );
    assert.strictEqual( getYearDays( 0 ), null, 'getYearDays( 0 )' );
    assert.strictEqual( getYearDays( "1" ), null, 'getYearDays( "1" )' );
    assert.strictEqual( getYearDays( 2021 ), 365, 'getYearDays( 2021 )' );
    assert.strictEqual( getYearDays( 2024 ), 366, 'getYearDays( 2024 )' );
}

console.log( 'Testing getYearDays...' );
test_getYearDays();
