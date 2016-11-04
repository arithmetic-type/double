import test from 'ava' ;
import * as number from '../../../../src' ;

test ( "le1" , t => {

	const one = function ( n ) {
		t.deepEqual ( number . le1 ( n ) , n <= 1 , n + " <= " + 1 ) ;
	} ;

	const n = 10 ;

	for ( let i = 0 ; i < n ; ++i ) {
		one ( Math . random ( ) + 0.5 ) ;
	}

	one (  Infinity ) ;
	one ( -Infinity ) ;

} );
