
var one ;

one = function ( a ) {
	deepEqual( number.mul2( a ) , a * 2 , a + " * 2" ) ;
} ;

test( "mul2" , function ( ) {

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
