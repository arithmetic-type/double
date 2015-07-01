
var one ;

one = function ( n ) {
	deepEqual ( number . gt0 ( n ) , n > 0 , n + " > " + 0 ) ;
} ;

test ( "gt0" , function ( ) {

	var i , n ;

	n = 10 ;

	for ( i = 0 ; i < n ; ++i ) {
		one ( Math . random ( ) - 0.5 ) ;
	}

	one (  Infinity ) ;
	one ( -Infinity ) ;

} );
