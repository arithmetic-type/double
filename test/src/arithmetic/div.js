import test from 'ava' ;
import number from '../../../src' ;

test ( "div" , t => {

	const one = function ( a , b ) {
		t.deepEqual ( number . div ( a , b ) , a / b , a + " / " + b ) ;
	} ;

	const n = 10 ;

	for ( let i = 0 ; i < n ; ++i ) {
		let a = Math . random ( ) ;
		let b = Math . random ( ) ;
		one ( a , b ) ;
	}

	one (  Infinity ,  Infinity ) ;
	one (  Infinity ,         0 ) ;
	one (         0 ,  Infinity ) ;
	one ( -Infinity , -Infinity ) ;
	one ( -Infinity ,         0 ) ;
	one (         0 , -Infinity ) ;
	one ( -Infinity ,  Infinity ) ;
	one (  Infinity , -Infinity ) ;

} ) ;
