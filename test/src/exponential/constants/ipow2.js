import test from 'ava' ;
import number from '../../../../src' ;

test( "ipow2" , t => {

	const one = function ( a ) {

		let x = a ;

		t.deepEqual( number.ipow2( x ) , a *= a , x + " *= " + x ) ;

	} ;

	const n = 10 ;

	for ( let i = 0 ; i < n ; ++i ) {
		let a = Math.random( ) ;
		one( a ) ;
	}

	one(  Infinity ) ;
	one(         0 ) ;
	one( -Infinity ) ;

} ) ;
