import { assert } from './assert.js';
import { calcDateByDaysAddition } from '../src/calcDateByDaysAddition.js';

function test_calcDateByDaysAddition() {
    assert.strictEqual( calcDateByDaysAddition(), null, 'calcDateByDaysAddition()' );
    assert.strictEqual( calcDateByDaysAddition( "bla.. bla.." ), null, 'calcDateByDaysAddition( "bla.. bla.." )' );
    assert.strictEqual( calcDateByDaysAddition( "20210110", "15" ), null, 'calcDateByDaysAddition( "20210110", "15" )' );
    assert.deepStrictEqual( calcDateByDaysAddition( "20210110", 10 ), [ 20, 1, 2021 ], 'calcDateByDaysAddition( "20210110", 10 )' );
    assert.deepStrictEqual( calcDateByDaysAddition( "20210110", -10 ), [ 31, 12, 2020 ], 'calcDateByDaysAddition( "20210110", -10 )' );
    assert.deepStrictEqual( calcDateByDaysAddition( "20210110", 2 * 365 ), [ 10, 1, 2023 ], 'calcDateByDaysAddition( "20210110", 2 * 365 )' );
    assert.deepStrictEqual( calcDateByDaysAddition( "20210110", -366-365  ), [ 10, 1, 2019 ], 'calcDateByDaysAddition( "20210110", -366-365 )' );
    assert.deepStrictEqual( calcDateByDaysAddition( "20210110", 0  ), [ 10, 1, 2021 ], 'calcDateByDaysAddition( "20210110", 0 )' );
}

console.log( 'Testing calcDateByDaysAddition...' );
test_calcDateByDaysAddition();
