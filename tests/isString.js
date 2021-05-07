import { assert } from './assert.js';
import { isString } from '../src/isString.js';

function test_isString() {
    assert.strictEqual( isString(), false, 'isString()' );
    assert.strictEqual( isString( null ), false, 'isString( null )' );
    assert.strictEqual( isString( NaN ), false, 'isString( NaN )' );
    assert.strictEqual( isString( [] ), false, 'isString( [] )' );
    assert.strictEqual( isString( {} ), false, 'isString( {} )' );
    assert.strictEqual( isString( false ), false, 'isString( false )' );
    assert.strictEqual( isString( -20.5 ), false, 'isString( -20.5 )' );
    assert.strictEqual( isString( 10 ), false, 'isString( 10 )' );
    assert.strictEqual( isString( 'string' ), true, 'isString( "string" )' );
}

export default { test_isString };
export { test_isString };