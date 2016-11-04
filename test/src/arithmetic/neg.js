
var one = function ( a ) {
	deepEqual( number.neg( a ), -a, "-" + a );
} ;

test( "neg", function () {

	var i, n;

	n = 10;

	for ( i = 0 ; i < n ; ++i ) {
		one( Math.random( ) );
	}

	one(  Infinity );
	one(         0 );
	one( -Infinity );

} );
