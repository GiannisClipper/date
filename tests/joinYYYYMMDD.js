import { assert } from './assert.js';
import { joinYYYYMMDD } from '../src/joinYYYYMMDD.js';

function test_joinYYYYMMDD() {
    assert.strictEqual( joinYYYYMMDD(), null, 'joinYYYYMMDD undefined' );
    assert.strictEqual( joinYYYYMMDD( '01012021' ), null, 'joinYYYYMMDD "01012021"' );
    assert.strictEqual( joinYYYYMMDD( [ 1, 1 ] ), null, 'joinYYYYMMDD [ 1, 1 ]' );
    assert.strictEqual( joinYYYYMMDD( [ 1, 1, -1 ] ), null, 'joinYYYYMMDD [ 1, 1, -1 ]' );
    assert.strictEqual( joinYYYYMMDD( [ 1, 1, 2021 ] ), '20210101', 'joinYYYYMMDD [ 1, 1, 2021 ]' );
    assert.strictEqual( joinYYYYMMDD( [ 31, 1, 2021 ] ), '20210131', 'joinYYYYMMDD [ 31, 1, 2021 ]' );
    assert.strictEqual( joinYYYYMMDD( [ 31, 'Jan', 2021 ] ), null, 'joinYYYYMMDD [ 31, "Jan", 2021 ]' );
    assert.strictEqual( joinYYYYMMDD( [ null, 1, 2021 ] ), null, 'joinYYYYMMDD [ null, 1, 2021 ]' );
    assert.strictEqual( joinYYYYMMDD( [ 0, 1, 2021 ] ), null, 'joinYYYYMMDD [ 0, 1, 2021 ]' );
    assert.strictEqual( joinYYYYMMDD( [ 30, 31, 1, 2021 ] ), null, 'joinYYYYMMDD [ 30, 31, 1, 2021 ]' );
}

export default { test_joinYYYYMMDD };
export { test_joinYYYYMMDD };