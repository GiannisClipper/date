import { assert } from './assert.js';
import { dateOfYear } from '../src/dateOfYear.js';

function test_dateOfYear() {
    assert.deepStrictEqual( dateOfYear(), null, 'dateOfYear undefined' );
    assert.deepStrictEqual( dateOfYear( 'bla.. bla..' ), null, 'dateOfYear "bla.. bla.."' );
    assert.deepStrictEqual( dateOfYear( 1, '2021' ), null, 'dateOfYear 1, "2021"' );
    assert.deepStrictEqual( dateOfYear( -1, 2021 ), null, 'dateOfYear -1, 2021' );
    assert.deepStrictEqual( dateOfYear( 0, 2021 ), null, 'dateOfYear 0, 2021' );
    assert.deepStrictEqual( dateOfYear( 1.5, 2021 ), null, 'dateOfYear 1.5, 2021' );
    assert.deepStrictEqual( dateOfYear( 366, 2021 ), null, 'dateOfYear 366, 2021' );
    assert.deepStrictEqual( dateOfYear( 366, 2024 ), [ 31, 12, 2024 ], 'dateOfYear 366, 2024' );
    assert.deepStrictEqual( dateOfYear( 60, 2021 ), [ 1, 3, 2021 ], 'dateOfYear 60, 2021' );
}

export default { test_dateOfYear };
export { test_dateOfYear };