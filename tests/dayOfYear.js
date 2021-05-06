import { assert } from './assert.js';
import { dayOfYear } from '../src/dayOfYear.js';

function test_dayOfYear() {
    assert.strictEqual( dayOfYear(), null, 'dayOfYear undefined' );
    assert.strictEqual( dayOfYear( 1 ), null, 'dayOfYear 1' );
    assert.strictEqual( dayOfYear( [ 1, 1, 2021 ] ), 1, 'dayOfYear [ 1, 1, 2021 ]' );
    assert.strictEqual( dayOfYear( [ 31, 12, 2021 ] ), 365, 'dayOfYear [ 31, 12, 2021 ]' );
    assert.strictEqual( dayOfYear( [ 1, 3, 2021 ] ), 60, 'dayOfYear [ 1, 3, 2021 ]' );
    assert.strictEqual( dayOfYear( [ 1, 3, 2024 ] ), 61, 'dayOfYear [ 1, 3, 2024 ]' );
    assert.strictEqual( dayOfYear( '' ), null, 'dayOfYear ""' );
    assert.strictEqual( dayOfYear( 'bla.. bla..' ), null, 'dayOfYear "bla.. bla.."' );
    assert.strictEqual( dayOfYear( '20210101' ), 1, 'dayOfYear "20210101"' );
    assert.strictEqual( dayOfYear( '20211231' ), 365, 'dayOfYear "20211231"' );
    assert.strictEqual( dayOfYear( '20241231' ), 366, 'dayOfYear "20241231"' );
}

export default { test_dayOfYear };
export { test_dayOfYear };