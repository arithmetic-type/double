import test from 'ava' ;
import * as number from "../../../../src/index.js" ;

test ( "isub1" , assert => {

	const one = function ( n ) {

		let x = n ;

		assert.deepEqual ( number . isub1 ( x ) , n -= 1 , x + " -= " + 1 ) ;

	} ;

	const n = 10 ;

	for ( let i = 0 ; i < n ; ++i ) {

		one ( Math . random ( ) ) ;

	}

	one (  Infinity ) ;
	one ( -Infinity ) ;

} ) ;
