import { assert } from './assert.js';
import { findDateByDaysAddition } from '../src/findDateByDaysAddition.js';

function test_findDateByDaysAddition() {
    assert.strictEqual( findDateByDaysAddition(), null, 'findDateByDaysAddition()' );
    assert.strictEqual( findDateByDaysAddition( "bla.. bla.." ), null, 'findDateByDaysAddition( "bla.. bla.." )' );
    assert.strictEqual( findDateByDaysAddition( "20210110", "15" ), null, 'findDateByDaysAddition( "20210110", "15" )' );
    assert.deepStrictEqual( findDateByDaysAddition( "20210110", 10 ), [ 20, 1, 2021 ], 'findDateByDaysAddition( "20210110", 10 )' );
    assert.deepStrictEqual( findDateByDaysAddition( "20210110", -10 ), [ 31, 12, 2020 ], 'findDateByDaysAddition( "20210110", -10 )' );
    assert.deepStrictEqual( findDateByDaysAddition( "20210110", 2 * 365 ), [ 10, 1, 2023 ], 'findDateByDaysAddition( "20210110", 2 * 365 )' );
    assert.deepStrictEqual( findDateByDaysAddition( "20210110", -366-365  ), [ 10, 1, 2019 ], 'findDateByDaysAddition( "20210110", -366-365 )' );
    assert.deepStrictEqual( findDateByDaysAddition( "20210110", 0  ), [ 10, 1, 2021 ], 'findDateByDaysAddition( "20210110", 0 )' );
}

console.log( 'Testing findDateByDaysAddition...' );
test_findDateByDaysAddition();
