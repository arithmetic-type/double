
var one ;

one = function ( a ) {
	deepEqual( number.mul5( a ) , a * 5 , a + " * 5" ) ;
} ;

test( "mul5" , function ( ) {

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
