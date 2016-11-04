
var one ;

one = function ( n ) {

	var x ;

	x = n ;

	deepEqual ( number . isub1 ( x ) , n -= 1 , x + " -= " + 1 ) ;

} ;

test ( "isub1" , function ( ) {

	var i , n ;

	n = 10 ;

	for ( i = 0 ; i < n ; ++i ) {

		one ( Math . random ( ) ) ;

	}

	one (  Infinity ) ;
	one ( -Infinity ) ;

} ) ;
