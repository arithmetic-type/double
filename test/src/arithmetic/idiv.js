import test from 'ava' ;
import * as number from '../../../src' ;

test( "idiv", t => {

	const one = function ( a, b ) {

		let x = a ;

		t.deepEqual( number.idiv( x, b ), a /= b, x + " /= " + b );

	} ;

	const n = 10;

	for ( let i = 0 ; i < n ; ++i ) {
		let a = Math.random();
		let b = Math.random();
		one( a, b );
	}

	one(  Infinity,         0 );
	one(         0,  Infinity );
	one( -Infinity,         0 );
	one(         0, -Infinity );

	const nan = function ( a, b ) {
		t.truthy( isNaN( number.idiv( a, b ) ), a + " /= " + b );
	} ;

	nan(  Infinity,  Infinity );
	nan( -Infinity, -Infinity );
	nan( -Infinity,  Infinity );
	nan(  Infinity, -Infinity );

} );
