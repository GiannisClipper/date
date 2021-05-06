import { assert } from './assert.js';
import { isInteger } from '../src/isInteger.js';

function test_isInteger() {
    assert.strictEqual( isInteger(), false, 'isInteger undefined' );
    assert.strictEqual( isInteger( null ), false, 'isInteger null' );
    assert.strictEqual( isInteger( NaN ), false, 'isInteger NaN' );
    assert.strictEqual( isInteger( [] ), false, 'isInteger []' );
    assert.strictEqual( isInteger( {} ), false, 'isInteger {}' );
    assert.strictEqual( isInteger( false ), false, 'isInteger boolean' );
    assert.strictEqual( isInteger( 20.5 ), false, 'isInteger float' );
    assert.strictEqual( isInteger( '100' ), false, 'isInteger "100"' );
    assert.strictEqual( isInteger( 100 ), true, 'isInteger 100' );
    assert.strictEqual( isInteger( 0 ), true, 'isInteger 0' );
    assert.strictEqual( isInteger( -10 ), true, 'isInteger -10' );
}

export default { test_isInteger };
export { test_isInteger };