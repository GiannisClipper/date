import { assert } from './assert.js';
import { monthDays } from '../src/monthDays.js';

function test_monthDays() {
    assert.strictEqual( monthDays( 1 ), null, 'monthDays 1' );
    assert.strictEqual( monthDays( 1, 1 ), null, 'monthDays 1, 1' );
    assert.strictEqual( monthDays( 1, 2021 ), 31, 'monthDays 1, 2021' );
    assert.strictEqual( monthDays( 2, 2021 ), 28, 'monthDays 2, 2021' );
    assert.strictEqual( monthDays( 2, 2024 ), 29, 'monthDays 2, 2024' );
    assert.strictEqual( monthDays( 3, 2021 ), 31, 'monthDays 3, 2021' );
    assert.strictEqual( monthDays( 4, 2021 ), 30, 'monthDays 4, 2021' );
    assert.strictEqual( monthDays( 5, 2021 ), 31, 'monthDays 5, 2021' );
    assert.strictEqual( monthDays( 6, 2021 ), 30, 'monthDays 6, 2021' );
    assert.strictEqual( monthDays( 7, 2021 ), 31, 'monthDays 7, 2021' );
    assert.strictEqual( monthDays( 8, 2021 ), 31, 'monthDays 8, 2021' );
    assert.strictEqual( monthDays( 9, 2021 ), 30, 'monthDays 9, 2021' );
    assert.strictEqual( monthDays( 10, 2021 ), 31, 'monthDays 10, 2021' );
    assert.strictEqual( monthDays( 11, 2021 ), 30, 'monthDays 11, 2021' );
    assert.strictEqual( monthDays( 12, 2021 ), 31, 'monthDays 12, 2021' );
}

export default { test_monthDays };
export { test_monthDays };