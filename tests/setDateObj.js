import { assert } from './assert.js';
import { setDateObj } from '../src/setDateObj.js';

console.log( 'Testing setDateObj...' );

assert.strictEqual( setDateObj(), null, 'setDateObj()' );

assert.strictEqual( setDateObj( 2021 ), null, 'setDateObj( 2021 )' );

assert.strictEqual( setDateObj( 'bla.. bla..' ), null, 'setDateObj( "bla.. bla.." )' );
assert.strictEqual( setDateObj( '31/01/21' ), null, 'setDateObj( "31/01/21" )' );
assert.deepStrictEqual( setDateObj( '31/01/2021' ), { day: 31, month: 1, year: 2021 }, 'setDateObj( "31/01/2021" )' );
assert.deepStrictEqual( setDateObj( '20210131' ), { day: 31, month: 1, year: 2021 }, 'setDateObj( "20210131" )' );

assert.strictEqual( setDateObj( [] ), null, 'setDateObj( [] )' );
assert.deepStrictEqual( setDateObj( [ 31, 1, 2021 ] ), { day: 31, month: 1, year: 2021 }, 'setDateObj( [ 31, 1, 2021 ] )' );

assert.deepStrictEqual( setDateObj( new Date( 2021, 0, 31 ) ), { day: 31, month: 1, year: 2021 }, 'setDateObj( new Date( 2021, 0, 31 ) )' );
assert.strictEqual( setDateObj( new Date( "bla.. bla.." ) ), null, 'setDateObj( new Date( "bla.. bla.." ) )' );
