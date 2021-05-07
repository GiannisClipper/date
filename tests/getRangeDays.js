import { assert } from './assert.js';
import { getRangeDays } from '../src/getRangeDays.js';

function test_getRangeDays() {
    assert.strictEqual( getRangeDays(), null, 'getRangeDays()' );
    assert.strictEqual( getRangeDays( 1, 2 ), null, 'getRangeDays( 1, 2 )' );
    assert.strictEqual( getRangeDays( [ 1, 1, 2021 ] ), null, 'getRangeDays( [ 1, 1, 2021 ] )' );
    assert.strictEqual( getRangeDays( [ 1, 1, 2021 ], [ 1, 1, 2021 ] ), 1, 'getRangeDays( [ 1, 1, 2021 ], [ 1, 1, 2021 ] )' );
    assert.strictEqual( getRangeDays( [ 31, 12, 2020 ], [ 1, 1, 2021 ] ), 2, 'getRangeDays( [ 31, 12, 2020 ], [ 1, 1, 2021 ] )' );
    assert.strictEqual( getRangeDays( [ 1, 1, 2021 ], [ 31, 12, 2020 ] ), -2, 'getRangeDays( [ 1, 1, 2021 ], [ 31, 12, 2020 ] )' );
    assert.strictEqual( getRangeDays( [ 31, 12, 2020 ], [ 31, 12, 2021 ] ), 366, 'getRangeDays( [ 31, 12, 2020 ], [ 31, 12, 2021 ] )' );
    assert.strictEqual( getRangeDays( [ 31, 12, 2023 ], [ 31, 12, 2024 ] ), 367, 'getRangeDays( [ 31, 12, 2023 ], [ 31, 12, 2024 ] )' );
    assert.strictEqual( getRangeDays( "20210101" ), null, 'getRangeDays( "20210101" )' );
    assert.strictEqual( getRangeDays( "20210101", "20210107" ), 7, 'getRangeDays( "20210101", "20210107" )' );
    assert.strictEqual( getRangeDays( "20181202", "20220120" ), 1146, 'getRangeDays( "20181202", "20220120" )' );
    assert.strictEqual( getRangeDays( "20220120", "20181202" ), -1146, 'getRangeDays( "20220120", "20181202" )' );
    // 30 + 365 + 366 + 365 + 20 = 1146
}

console.log( 'Testing getRangeDays...' );
test_getRangeDays();
