import test from 'ava' ;
import number from '../../../src' ;
import int32 from "aureooms-js-int32"  ;
import random from "aureooms-js-random" ;

test ( "imod" , t => {

	const one = function ( a , b ) {

		let x = a ;

		t.deepEqual ( number . imod ( x , b ) , a %= b , x + " %= " + b ) ;

	} ;

	const n = 10 ;

	for ( let i = 0 ; i < n ; ++i ) {
		let a = random . randint ( int32 . min , int32 . max + 1 ) ;
		let b = random . randint ( int32 . min , int32 . max + 1 ) ;
		one ( a , b ) ;
	}

} ) ;
