
var one ;

one = function ( a ) {

	var x ;

	x = a ;

	deepEqual( number.ipow2( x ) , a *= a , x + " *= " + x ) ;

} ;

test( "ipow2" , function ( ) {

	var a , i , n ;

	n = 10 ;

	for ( i = 0 ; i < n ; ++i ) {
		a = Math.random( ) ;
		one( a ) ;
	}

	one(  Infinity ) ;
	one(         0 ) ;
	one( -Infinity ) ;

} ) ;
