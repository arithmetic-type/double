import test from 'ava' ;
import * as number from '../../../src' ;

test( "mul", t => {

	const one = function ( a, b ) {
		t.deepEqual( number.mul( a, b ), a * b, a + " * " + b );
	} ;

	const n = 10;

	for ( let i = 0 ; i < n ; ++i ) {
		const a = Math.random();
		const b = Math.random();
		one( a, b );
	}

	one(  Infinity,  Infinity );
	one( -Infinity, -Infinity );
	one( -Infinity,  Infinity );
	one(  Infinity, -Infinity );

	const nan = function ( a, b ) {
		t.truthy( isNaN( number.mul( a, b ) ), a + " * " + b );
	} ;

	nan(  Infinity,         0 );
	nan(         0,  Infinity );
	nan( -Infinity,         0 );
	nan(         0, -Infinity );

} );
