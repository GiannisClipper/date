import { assert } from './assert.js';
import { getDateObj } from '../src/getDateObj.js';

console.log( 'Testing getDateObj...' );

assert.strictEqual( getDateObj(), null, 'getDateObj()' );
assert.strictEqual( getDateObj( null ), null, 'getDateObj( null )' );
assert.strictEqual( getDateObj( NaN ), null, 'getDateObj( Nan )' );
assert.strictEqual( getDateObj( 123 ), null, 'getDateObj( 123 )' );
assert.strictEqual( getDateObj( 'bla.. bla..' ), null, 'getDateObj( "bla.. bla.." )' );
assert.strictEqual( getDateObj( [] ), null, 'getDateObj( [] )' );
assert.strictEqual( getDateObj( {} ), null, 'getDateObj( {} )' );

assert.strictEqual( getDateObj( { day: 0, month: 1, year: 2021 } ), null, 'getDateObj( { day: 0, month: 1, year: 2021 } )' );
assert.strictEqual( getDateObj( { date: 1, month: 1, year: 2021 } ), null, 'getDateObj( { date: 1, month: 1, year: 2021 } )' );
assert.deepStrictEqual( getDateObj( { day: 1, month: 1, year: 2021 } ), { day: 1, month: 1, year: 2021 }, 'getDateObj( { day: 1, month: 1, year: 2021 } )' );
assert.deepStrictEqual( getDateObj( { year: 2021, month: 1, day: 1 } ), { day: 1, month: 1, year: 2021 }, 'getDateObj( { day: 1, month: 1, year: 2021 } )' );
