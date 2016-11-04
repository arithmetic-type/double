import test from 'ava' ;
import number from '../../../../src' ;

test ( "iadd1" , assert => {

	const one = function ( n ) {

		const x = n ;

		assert . deepEqual ( number . iadd1 ( x ) , n += 1 , x + " += " + 1 ) ;

	} ;

	const n = 10 ;

	for ( let i = 0 ; i < n ; ++i ) {

		one ( Math . random ( ) ) ;

	}

	one (  Infinity ) ;
	one ( -Infinity ) ;

} ) ;
