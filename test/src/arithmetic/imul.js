import test from 'ava' ;
import * as number from '../../../src' ;

test( "imul", t => {

	const one = function ( a, b ) {

		let x = a ;

		t.deepEqual( number.imul( x, b ), a *= b, x + " *= " + b );

	} ;

	const n = 10;

	for ( let i = 0 ; i < n ; ++i ) {
		let a = Math.random();
		let b = Math.random();
		one( a, b );
	}

	one(  Infinity,  Infinity );
	one( -Infinity, -Infinity );
	one( -Infinity,  Infinity );
	one(  Infinity, -Infinity );

	const nan = function ( a, b ) {
		t.truthy( isNaN( number.mul( a, b ) ), a + " *= " + b );
	} ;

	nan(  Infinity,         0 );
	nan(         0,  Infinity );
	nan( -Infinity,         0 );
	nan(         0, -Infinity );

} );
