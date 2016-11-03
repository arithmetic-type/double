import test from 'ava' ;
import number from '../../src' ;

test( "sqrt" , t => {

	const one = function ( a ) {

		t.deepEqual( number.sqrt( a ) , Math.sqrt( a ) , "sqrt " + a ) ;

	} ;

	const n = 10 ;

	for ( let i = 0 ; i < n ; ++i ) {
		const a = Math.random( ) ;
		one( a ) ;
	}

	one(  Infinity ) ;
	one(         0 ) ;
	one( -Infinity ) ;

} ) ;
