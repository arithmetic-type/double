
var one ;

one = function ( n ) {

	var x ;

	x = n ;

	deepEqual ( number . isubone ( x ) , n -= 1 , x + " -= " + 1 ) ;

} ;

test ( "isubone" , function ( ) {

	var i , n ;

	n = 10 ;

	for ( i = 0 ; i < n ; ++i ) {

		one ( Math . random ( ) ) ;

	}

	one (  Infinity ) ;
	one ( -Infinity ) ;

} ) ;
