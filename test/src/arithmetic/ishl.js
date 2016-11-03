import test from 'ava' ;
import number from '../../src' ;

test( "ishl" , t => {

	const n = 10 ;

	for ( let i = 0 ; i < n ; ++i ) {

		let a = Math.floor( Math.random() * Math.pow( 2 , 32 ) ) ;
		let b = Math.floor( Math.random() * 32 ) ;
		let x = a ;

		t.deepEqual( number.ishl( x , b ) , a <<= b , x + " <<= " + b ) ;

	}

} ) ;
