
var one = function ( a ) {
	deepEqual( number.parse( a.toString( ) ), a, "parse('" + a + "')" );
} ;

test( "parse", function () {

	var i, n;

	n = 10;

	for ( i = 0 ; i < n ; ++i ) {
		one( Math.random( ) );
	}

	one(  Infinity );
	one(         0 );
	one( -Infinity );

} );
