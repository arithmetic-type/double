import test from 'ava' ;
import number from '../../../../src' ;

test ( "div2n" , t => {

	const one = function ( n , l ) {
		t.deepEqual ( number . div2n ( n , l ) , n / Math.pow( 2 , l ) , n + " / " + Math.pow( 2 , l ) ) ;
	} ;

	const n = 10 ;

	for ( let i = 0 ; i < n ; ++i ) {
		one ( Math . random ( ) , i ) ;
	}

	one (  Infinity , 4 ) ;
	one (         0 , 4 ) ;
	one ( -Infinity , 4 ) ;

} ) ;
