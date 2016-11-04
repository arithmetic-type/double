
var one ;

one = function ( n ) {

	var x ;

	x = n ;

	deepEqual ( number . idiv2 ( x ) , n /= 2 , x + " /= " + 2 ) ;

} ;

test ( "idiv2" , function ( ) {

	var i , n ;

	n = 10 ;

	for ( i = 0 ; i < n ; ++i ) {
		one ( Math . random ( ) ) ;
	}

	one (  Infinity ) ;
	one ( -Infinity ) ;

} ) ;
