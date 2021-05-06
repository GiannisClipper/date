import { assert } from './assert.js';
import { dayOfWeek } from '../src/dayOfWeek.js';

function test_dayOfWeek() {
    assert.strictEqual( dayOfWeek(), null, 'dayOfWeek undefined' );
    assert.strictEqual( dayOfWeek( [] ), null, 'dayOfWeek []' );
    assert.strictEqual( dayOfWeek( [ "bla.. bla.." ] ), null, 'dayOfWeek [ "bla... bla..." ]' );
    assert.strictEqual( dayOfWeek( [ 6, 5, 2021 ] ), 4, 'dayOfWeek [ 6, 5, 2021 ]' );
    assert.strictEqual( dayOfWeek( '' ), null, 'dayOfWeek ""' );
    assert.strictEqual( dayOfWeek( 'bla.. bla..' ), null, 'dayOfWeek "bla.. bla.."' );
    assert.strictEqual( dayOfWeek( '20210315' ), 1, 'dayOfWeek "20210315"' );
    assert.strictEqual( dayOfWeek( '20210325' ), 4, 'dayOfWeek "20210325"' );
    assert.strictEqual( dayOfWeek( '20210502' ), 7, 'dayOfWeek "20210502"' );
    assert.strictEqual( dayOfWeek( '20200918' ), 5, 'dayOfWeek "20200918"' );
}

export default { test_dayOfWeek };
export { test_dayOfWeek };