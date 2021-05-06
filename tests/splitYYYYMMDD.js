import { assert } from './assert.js';
import { splitYYYYMMDD } from '../src/splitYYYYMMDD.js';

function test_splitYYYYMMDD() {
    assert.strictEqual( splitYYYYMMDD(), null, 'splitYYYYMMDD undefined' );
    assert.strictEqual( splitYYYYMMDD( 2021 ), null, 'splitYYYYMMDD 2021' );
    assert.strictEqual( splitYYYYMMDD( 'bla.. bla..' ), null, 'splitYYYYMMDD "bla.. bla.."' );
    assert.strictEqual( splitYYYYMMDD( '31/01/21' ), null, 'splitYYYYMMDD "31/01/21"' );
    assert.strictEqual( splitYYYYMMDD( '31012021' ), null, 'splitYYYYMMDD "31012021"' );
    assert.deepStrictEqual( splitYYYYMMDD( '20210131' ), [ 31, 1, 2021 ], 'splitYYYYMMDD "20210131"' );
}

export default { test_splitYYYYMMDD };
export { test_splitYYYYMMDD };