import test from 'ava' ;
import * as number from '../../../src' ;

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

	one(  Infinity,         0 );
	one(         0,  Infinity );
	one( -Infinity,         0 );
	one(         0, -Infinity );

	const nan = function ( a, b ) {
		t.truthy( isNaN( number.div( a, b ) ), a + " / " + b );
	} ;

	nan(  Infinity,  Infinity );
	nan( -Infinity, -Infinity );
	nan( -Infinity,  Infinity );
	nan(  Infinity, -Infinity );

} ) ;
