import test from 'ava' ;
import * as number from '../../../../src' ;

test( "imul2" , assert => {

	const one = function ( a ) {

		let x = a ;

		assert.deepEqual( number.imul2( x ) , a *= 2 , x + " *= 2" ) ;

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
