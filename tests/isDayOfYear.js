import { assert } from './assert.js';
import { isDayOfYear } from '../src/isDayOfYear.js';

function test_isDayOfYear() {
    assert.strictEqual( isDayOfYear(), false, 'isDayOfYear undefined' );
    assert.strictEqual( isDayOfYear( 1 ), false, 'isDayOfYear 1' );
    assert.strictEqual( isDayOfYear( 1, "2021" ), false, 'isDayOfYear 1, "2021"' );
    assert.strictEqual( isDayOfYear( "1", 2021 ), false, 'isDayOfYear "1", 2021' );
    assert.strictEqual( isDayOfYear( 1.5, 2021 ), false, 'isDayOfYear 1.5, 2021' );
    assert.strictEqual( isDayOfYear( -1, 2021 ), false, 'isDayOfYear -1, 2021' );
    assert.strictEqual( isDayOfYear( 0, 2021 ), false, 'isDayOfYear 0, 2021' );
    assert.strictEqual( isDayOfYear( 366, 2021 ), false, 'isDayOfYear 366, 2021' );
    assert.strictEqual( isDayOfYear( 366, 2024 ), true, 'isDayOfYear 366, 2024' );
    assert.strictEqual( isDayOfYear( 365, 2021 ), true, 'isDayOfYear 365, 2021' );
    assert.strictEqual( isDayOfYear( 2, 2021 ), true, 'isDayOfYear 2, 2021' );
}

export default { test_isDayOfYear };
export { test_isDayOfYear };