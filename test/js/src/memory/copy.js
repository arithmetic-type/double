
var one ;

one = function ( a ) {

	var b , x ;

	b = number.copy( a ) ;

	ok( a === b , a + " === " + b ) ;

	x = Math.random( ) ;

	a -= x ;

	ok( a === b - x , a + " === " + b + " - " + x ) ;

} ;

test( "memory" , function ( ) {

	var a , i , n ;

	n = 10 ;

	for ( i = 0 ; i < n ; ++i ) {
		a = Math.random( ) ;
		one( a ) ;
	}

	one(  Infinity ) ;
	one(         0 ) ;
	one( -Infinity ) ;


} )
