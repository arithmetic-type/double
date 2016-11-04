
var one;

one = function ( a, b ) {

	var x ;

	x = a ;

	deepEqual( number.imul( x, b ), a *= b, x + " *= " + b );

} ;

test( "imul", function () {

	var a, b, i, n;

	n = 10;

	for ( i = 0 ; i < n ; ++i ) {
		a = Math.random();
		b = Math.random();
		one( a, b );
	}

	one(  Infinity,  Infinity );
	one(  Infinity,         0 );
	one(         0,  Infinity );
	one( -Infinity, -Infinity );
	one( -Infinity,         0 );
	one(         0, -Infinity );
	one( -Infinity,  Infinity );
	one(  Infinity, -Infinity );

} );
