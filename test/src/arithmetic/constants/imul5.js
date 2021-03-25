import test from 'ava' ;
import * as number from "../../../../src/index.js" ;

test( "imul5" , assert => {

	const one = function ( a ) {

		let x = a ;

		assert.deepEqual( number.imul5( x ) , a *= 5 , x + " *= 5" ) ;

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
