import test from 'ava' ;
import * as number from "../../../../src/index.js" ;

test ( "sub1" , assert => {

	const one = function ( n ) {
		assert . deepEqual ( number . sub1 ( n ) , n - 1 , n + " - " + 1 ) ;
	} ;

	const n = 10 ;

	for ( let i = 0 ; i < n ; ++i ) {

		one ( Math . random ( ) ) ;

	}

	one (  Infinity ) ;
	one ( -Infinity ) ;

} ) ;
