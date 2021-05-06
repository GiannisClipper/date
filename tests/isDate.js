import { assert } from './assert.js';
import { isDate } from '../src/isDate.js';

function test_isDate() {
    assert.strictEqual( isDate(), false, 'isDate undefined' );
    assert.strictEqual( isDate( 1, 1 ), false, 'isDate 1, 1' );
    assert.strictEqual( isDate( 1, 1, -1 ), false, 'isDate 1, 1, -1' );
    assert.strictEqual( isDate( 1, 1, 2021 ), true, 'isDate 1, 1, 2021' );
    assert.strictEqual( isDate( 31, 1, 2021 ), true, 'isDate 31, 1, 2021' );
    assert.strictEqual( isDate( 31, 2, 2021 ), false, 'isDate 31, 2, 2021' );
    assert.strictEqual( isDate( 30, 2, 2021 ), false, 'isDate 30, 2, 2021' );
    assert.strictEqual( isDate( 29, 2, 2021 ), false, 'isDate 29, 2, 2021' );
    assert.strictEqual( isDate( 28, 2, 2021 ), true, 'isDate 28, 2, 2021' );
    assert.strictEqual( isDate( 30, 2, 2024 ), false, 'isDate 30, 2, 2024' );
    assert.strictEqual( isDate( 29, 2, 2024 ), true, 'isDate 29, 2, 2024' );
    assert.strictEqual( isDate( 0, 3, 2021 ), false, 'isDate 0, 3, 2021' );
    assert.strictEqual( isDate( -1, 3, 2021 ), false, 'isDate -1, 3, 2021' );
}

export default { test_isDate };
export { test_isDate };