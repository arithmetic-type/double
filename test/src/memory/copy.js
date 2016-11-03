import test from 'ava' ;
import number from '../../src' ;

test( "memory" , t => {

	const one = function ( a ) {

		const b = number.copy( a ) ;

		t.truthy( a === b , a + " === " + b ) ;

		const x = Math.random( ) ;

		a -= x ;

		t.truthy( a === b - x , a + " === " + b + " - " + x ) ;

	} ;

	const n = 10 ;

	for ( let i = 0 ; i < n ; ++i ) {
		let a = Math.random( ) ;
		one( a ) ;
	}

	one(  Infinity ) ;
	one(         0 ) ;
	one( -Infinity ) ;


} )
