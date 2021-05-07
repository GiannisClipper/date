import { assert } from './assert.js';
import { isMonth } from '../src/isMonth.js';

function test_isMonth() {
    assert.strictEqual( isMonth( "January" ), false, 'isMonth( "January" )' );
    assert.strictEqual( isMonth( -1 ), false, 'isMonth( -1 )' );
    assert.strictEqual( isMonth( 0 ), false, 'isMonth( 0 )' );
    assert.strictEqual( isMonth( 1 ), true, 'isMonth( 1 )' );
    assert.strictEqual( isMonth( 6.6 ), false, 'isMonth( 6.6 )' );
    assert.strictEqual( isMonth( 12 ), true, 'isMonth( 12 )' );
    assert.strictEqual( isMonth( 13 ), false, 'isMonth( 13 )' );
}

console.log( 'Testing isMonth...' );
test_isMonth();
