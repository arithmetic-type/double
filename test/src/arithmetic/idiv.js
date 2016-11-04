import test from 'ava' ;
import number from '../../../src' ;

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

	one(  Infinity,  Infinity );
	one(  Infinity,         0 );
	one(         0,  Infinity );
	one( -Infinity, -Infinity );
	one( -Infinity,         0 );
	one(         0, -Infinity );
	one( -Infinity,  Infinity );
	one(  Infinity, -Infinity );

} );
