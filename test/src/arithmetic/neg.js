import test from 'ava' ;
import * as number from '../../../src' ;

test( "neg", t => {

	const one = function ( a ) {
		t.deepEqual( number.neg( a ), -a, "-" + a );
	} ;

	const n = 10;

	for ( let i = 0 ; i < n ; ++i ) {
		one( Math.random( ) );
	}

	one(  Infinity );
	one(         0 );
	one( -Infinity );

} );
