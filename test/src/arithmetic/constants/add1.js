import test from 'ava' ;
import * as number from '../../../../src' ;

test ( "add1" , assert => {

	const one = function ( n ) {
		assert . deepEqual ( number . add1 ( n ) , n + 1 , n + " + " + 1 ) ;
	} ;

	const n = 10 ;

	for ( let i = 0 ; i < n ; ++i ) {

		one ( Math . random ( ) ) ;

	}

	one (  Infinity ) ;
	one ( -Infinity ) ;

} ) ;
