import test from 'ava' ;
import number from '../../src' ;

test( "mul2" , assert => {

	const one = function ( a ) {
		assert.deepEqual( number.mul2( a ) , a * 2 , a + " * 2" ) ;
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
