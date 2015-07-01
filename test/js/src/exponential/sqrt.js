
var one ;

one = function ( a ) {

	deepEqual( number.sqrt( a ) , Math.sqrt( a ) , "sqrt " + a ) ;

} ;

test( "sqrt" , function ( ) {

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
