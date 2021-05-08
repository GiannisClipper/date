import { assert } from './assert.js';
import { config } from '../src/config.js';

function test_config() {
    assert.strictEqual( config.setYearRange(), false, 'config.setYearRange()' );
    assert.deepStrictEqual( config.getYearRange(), [ 1900, 2099 ], 'config.getYearRange()' );
    assert.strictEqual( config.setYearRange( "1800-2199" ), false, 'config.setYearRange( "1800-2199" )' );
    assert.deepStrictEqual( config.getYearRange(), [ 1900, 2099 ], 'config.getYearRange()' );
    assert.strictEqual( config.setYearRange( 1800, 2199 ), true, 'config.setYearRange( 1800, 2199 )' );
    assert.deepStrictEqual( config.getYearRange(), [ 1800, 2199 ], 'config.getYearRange()' );
}

console.log( 'Testing config...' );
test_config();
