import test from 'ava' ;
import * as number from "../../../src/index.js" ;

test( "iadd", t => {

	const one = function ( a, b ) {

		let x = a ;

		t.deepEqual( number.iadd( x, b ), a += b, x + " += " + b );

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

	t.truthy ( isNaN( number.iadd( -Infinity ,  Infinity ) ) , '-Infinity += Infinity' ) ;
	t.truthy ( isNaN( number.iadd(  Infinity , -Infinity ) ) , 'Infinity += -Infinity' ) ;

} );
