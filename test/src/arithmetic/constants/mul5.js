import test from 'ava' ;
import * as number from "../../../../src/index.js" ;

test( "mul5" , assert => {

	const one = function ( a ) {
		assert.deepEqual( number.mul5( a ) , a * 5 , a + " * 5" ) ;
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
