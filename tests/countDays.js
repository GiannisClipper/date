import { assert } from './assert.js';
import { countDays } from '../src/countDays.js';

function test_countDays() {
    assert.strictEqual( countDays(), null, 'countDays undefined' );
    assert.strictEqual( countDays( 1, 2 ), null, 'countDays 1, 2' );
    assert.strictEqual( countDays( [ 1, 1, 2021 ] ), null, 'countDays [ 1, 1, 2021 ]' );
    assert.strictEqual( countDays( [ 1, 1, 2021 ], [ 1, 1, 2021 ] ), 1, 'countDays [ 1, 1, 2021 ], [ 1, 1, 2021 ]' );
    assert.strictEqual( countDays( [ 31, 12, 2020 ], [ 1, 1, 2021 ] ), 2, 'countDays [ 31, 12, 2020 ], [ 1, 1, 2021 ]' );
    assert.strictEqual( countDays( [ 1, 1, 2021 ], [ 31, 12, 2020 ] ), -2, 'countDays [ 1, 1, 2021 ], [ 31, 12, 2020 ]' );
    assert.strictEqual( countDays( [ 31, 12, 2020 ], [ 31, 12, 2021 ] ), 366, 'countDays [ 31, 12, 2020 ], [ 31, 12, 2021 ]' );
    assert.strictEqual( countDays( [ 31, 12, 2023 ], [ 31, 12, 2024 ] ), 367, 'countDays [ 31, 12, 2023 ], [ 31, 12, 2024 ]' );
    assert.strictEqual( countDays( "20210101" ), null, 'countDays "20210101"' );
    assert.strictEqual( countDays( "20210101", "20210107" ), 7, 'countDays "20210101", "20210107"' );
    assert.strictEqual( countDays( "20181202", "20220120" ), 1146, 'countDays "20181202", "20220130"' );
    assert.strictEqual( countDays( "20220120", "20181202" ), -1146, 'countDays "20220120", "20181202"' );
    // 30 + 365 + 366 + 365 + 20 = 1146
}

export default { test_countDays };
export { test_countDays };