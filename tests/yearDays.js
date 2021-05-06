import { assert } from './assert.js';
import { yearDays } from '../src/yearDays.js';

function test_yearDays() {
    assert.strictEqual( yearDays(), null, 'yearDays undefined' );
    assert.strictEqual( yearDays( '1' ), null, 'yearDays "1"' );
    assert.strictEqual( yearDays( 2021 ), 365, 'yearDays 2021' );
    assert.strictEqual( yearDays( 2024 ), 366, 'yearDays 2024' );
}

export default { test_yearDays };
export { test_yearDays };