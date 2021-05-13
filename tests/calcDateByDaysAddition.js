import { assert } from './assert.js';
import { calcDateByDaysAddition } from '../src/calcDateByDaysAddition.js';

console.log( 'Testing calcDateByDaysAddition...' );

assert.strictEqual( calcDateByDaysAddition(), null, 'calcDateByDaysAddition()' );
assert.strictEqual( calcDateByDaysAddition( "bla.. bla.." ), null, 'calcDateByDaysAddition( "bla.. bla.." )' );
assert.strictEqual( calcDateByDaysAddition( "20210110", "123" ), null, 'calcDateByDaysAddition( "20210110", "123" )' );

assert.deepStrictEqual( calcDateByDaysAddition( "20210110", 10 ), { day: 20, month: 1, year: 2021 }, 'calcDateByDaysAddition( "20210110", 10 )' );
assert.deepStrictEqual( calcDateByDaysAddition( "20210110", -10 ), { day: 31, month: 12, year: 2020 }, 'calcDateByDaysAddition( "20210110", -10 )' );
assert.deepStrictEqual( calcDateByDaysAddition( "20210110", 2 * 365 ), { day: 10, month: 1, year: 2023 }, 'calcDateByDaysAddition( "20210110", 2 * 365 )' );
assert.deepStrictEqual( calcDateByDaysAddition( "20210110", -366-365  ), { day: 10, month: 1, year: 2019 }, 'calcDateByDaysAddition( "20210110", -366-365 )' );
assert.deepStrictEqual( calcDateByDaysAddition( "20210110", 0  ), { day: 10, month: 1, year: 2021 }, 'calcDateByDaysAddition( "20210110", 0 )' );
