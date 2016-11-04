
var one ;

one = function ( n ) {
	deepEqual ( number . le1 ( n ) , n <= 1 , n + " <= " + 1 ) ;
} ;

test ( "le1" , function ( ) {

	var i , n ;

	n = 10 ;

	for ( i = 0 ; i < n ; ++i ) {
		one ( Math . random ( ) + 0.5 ) ;
	}

	one (  Infinity ) ;
	one ( -Infinity ) ;

} );
