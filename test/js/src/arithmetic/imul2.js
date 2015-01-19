
var one ;

one = function ( a ) {

	var x ;

	x = a ;

	deepEqual( number.imul2( x ) , a *= 2 , x + " *= 2" ) ;

} ;

test( "imul2" , function ( ) {

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
