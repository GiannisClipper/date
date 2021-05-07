import { assert } from './assert.js';
import { configYearRange } from '../src/configYearRange.js';

function test_configYearRange() {
    assert.strictEqual( configYearRange.set(), false, 'configYearRange.set()' );
    assert.deepStrictEqual( configYearRange.get(), [ 1900, 2099 ], 'configYearRange.get()' );
    assert.strictEqual( configYearRange.set( "1800-2199" ), false, 'configYearRange.set( "1800-2199" )' );
    assert.strictEqual( configYearRange.set( 1800, 2199 ), true, 'configYearRange.set( 1800, 2199 )' );
    assert.deepStrictEqual( configYearRange.get(), [ 1800, 2199 ], 'configYearRange.get()' );
}

console.log( 'Testing configYearRange...' );
test_configYearRange();
