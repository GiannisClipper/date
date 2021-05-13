import { assert } from './assert.js';
import { calcDateByDayOfYear } from '../src/calcDateByDayOfYear.js';

console.log( 'Testing calcDateByDayOfYear...' );

assert.deepStrictEqual( calcDateByDayOfYear(), null, 'calcDateByDayOfYear()' );
assert.deepStrictEqual( calcDateByDayOfYear( "bla.. bla.." ), null, 'calcDateByDayOfYear( "bla.. bla.." )' );
assert.deepStrictEqual( calcDateByDayOfYear( 1, "2021" ), null, 'calcDateByDayOfYear( 1, "2021" )' );
assert.deepStrictEqual( calcDateByDayOfYear( -1, 2021 ), null, 'calcDateByDayOfYear( -1, 2021 )' );
assert.deepStrictEqual( calcDateByDayOfYear( 0, 2021 ), null, 'calcDateByDayOfYear( 0, 2021 )' );
assert.deepStrictEqual( calcDateByDayOfYear( 1.5, 2021 ), null, 'calcDateByDayOfYear( 1.5, 2021 )' );
assert.deepStrictEqual( calcDateByDayOfYear( 366, 2021 ), null, 'calcDateByDayOfYear( 366, 2021 )' );
assert.deepStrictEqual( calcDateByDayOfYear( 366, 2024 ), { day: 31, month: 12, year: 2024 }, 'calcDateByDayOfYear( 366, 2024 )' );
assert.deepStrictEqual( calcDateByDayOfYear( 60, 2021 ), { day: 1, month: 3, year: 2021 }, 'calcDateByDayOfYear( 60, 2021 )' );
