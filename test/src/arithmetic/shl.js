import test from 'ava' ;
import number from '../../src' ;

test( "shl" , t => {

	const n = 10 ;

	for ( let i = 0 ; i < n ; ++i ) {

		const a = Math.floor( Math.random() * Math.pow( 2 , 32 ) ) ;
		const b = Math.floor( Math.random() * 32 ) ;

		t.deepEqual( number.shl( a , b ) , a << b , a + " << " + b ) ;

	}

} ) ;
