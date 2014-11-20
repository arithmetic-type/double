
var one ;

one = function ( n ) {
	deepEqual ( number . addone ( n ) , n + 1 , n + " + " + 1 ) ;
} ;

test ( "addone" , function ( ) {

	var i , n ;

	n = 10 ;

	for ( i = 0 ; i < n ; ++i ) {

		one ( Math . random ( ) ) ;

	}

	one (  Infinity ) ;
	one ( -Infinity ) ;

} ) ;
