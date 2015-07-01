
var one ;

one = function ( a ) {

	var x ;

	x = a ;

	deepEqual( number.imul5( x ) , a *= 5 , x + " *= 5" ) ;

} ;

test( "imul5" , function ( ) {

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
