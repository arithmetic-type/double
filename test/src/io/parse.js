import test from 'ava' ;
import * as number from '../../../src' ;

test( "parse", t => {

	const one = function ( a ) {
		t.deepEqual( number.parse( a.toString( ) ), a, "parse('" + a + "')" );
	} ;

	const n = 10;

	for ( let i = 0 ; i < n ; ++i ) {
		one( Math.random( ) );
	}

	one(  Infinity );
	one(         0 );
	one( -Infinity );

} );
