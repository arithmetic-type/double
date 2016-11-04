import test from 'ava' ;
import number from '../../../src' ;

test ( "log2" , t => {

	const one = function ( n , expected ) {
		t.deepEqual ( number.log2 ( n ) , expected , "log2 ( " + n + " )" ) ;
	} ;

	one ( 1 , 0 ) ;
	one ( 2 * 2 * 2 , 3 ) ;
	one ( 2 * 2 * 2 * 2 , 4 ) ;

	one ( 2 * 2 * 2 * Math.sqrt ( 2 ) , 3.5 ) ;

} ) ;
