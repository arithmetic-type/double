import test from 'ava' ;
import number from '../../../../src' ;

test( "pow2" , t => {

	const one = function ( a ) {

		t.deepEqual( number.pow2( a ) , a * a , a + " * " + a ) ;

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
