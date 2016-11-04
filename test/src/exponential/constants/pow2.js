
var one ;

one = function ( a ) {

	deepEqual( number.pow2( a ) , a * a , a + " * " + a ) ;

} ;

test( "pow2" , function ( ) {

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
