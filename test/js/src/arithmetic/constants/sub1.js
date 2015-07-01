
var one ;

one = function ( n ) {
	deepEqual ( number . sub1 ( n ) , n - 1 , n + " - " + 1 ) ;
} ;

test ( "sub1" , function ( ) {

	var i , n ;

	n = 10 ;

	for ( i = 0 ; i < n ; ++i ) {

		one ( Math . random ( ) ) ;

	}

	one (  Infinity ) ;
	one ( -Infinity ) ;

} ) ;
