
var one = function ( n , l ) {
	deepEqual ( number . div2n ( n , l ) , n / Math.pow( 2 , l ) , n + " / " + Math.pow( 2 , l ) ) ;
} ;

test ( "div2n" , function ( ) {

	var n = 10 ;

	for ( var i = 0 ; i < n ; ++i ) {
		one ( Math . random ( ) , i ) ;
	}

	one (  Infinity , 4 ) ;
	one (         0 , 4 ) ;
	one ( -Infinity , 4 ) ;

} ) ;
