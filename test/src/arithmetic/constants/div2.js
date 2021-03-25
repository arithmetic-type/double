import test from 'ava' ;
import * as number from "../../../../src/index.js" ;

test ( "div2" , assert => {

	const one = function ( n ) {
		assert . deepEqual ( number . div2 ( n ) , n / 2 , n + " / " + 2 ) ;
	} ;

	const n = 10 ;

	for ( let i = 0 ; i < n ; ++i ) {
		one ( Math . random ( ) ) ;
	}

	one (  Infinity ) ;
	one ( -Infinity ) ;

} ) ;
