import { assert } from './assert.js';
import { config } from '../src/config.js';

function test_config() {
    assert.strictEqual( config.setYearRange(), false, 'config.setYearRange()' );
    assert.strictEqual( config.setYearRange( "bla.. bla.." ), false, 'config.setYearRange( "bla.. bla.." )' );
    assert.deepStrictEqual( config.getYearRange(), [ 1900, 2099 ], 'config.getYearRange()' );
    assert.strictEqual( config.setYearRange( "1800-2199" ), false, 'config.setYearRange( "1800-2199" )' );
    assert.deepStrictEqual( config.getYearRange(), [ 1900, 2099 ], 'config.getYearRange()' );
    assert.strictEqual( config.setYearRange( 1800, 2199 ), true, 'config.setYearRange( 1800, 2199 )' );
    assert.deepStrictEqual( config.getYearRange(), [ 1800, 2199 ], 'config.getYearRange()' );

    assert.strictEqual( config.setReprPattern(), false, 'config.setReprPattern()' );
    assert.strictEqual( config.setReprPattern( [] ), false, 'config.setReprPattern( [] )' );
    assert.strictEqual( config.getReprPattern(), "DD/MM/YYYY", 'config.getReprPattern()' );
    assert.strictEqual( config.setReprPattern( "DD-MM-YY" ), true, 'config.setReprPattern( "DD-MM-YY" )' );
    assert.strictEqual( config.getReprPattern(), "DD-MM-YY", 'config.getReprPattern()' );
}

console.log( 'Testing config...' );
test_config();
