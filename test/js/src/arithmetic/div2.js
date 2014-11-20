
var one ;

one = function ( n ) {
	deepEqual ( number . div2 ( n ) , n / 2 , n + " / " + 2 ) ;
} ;

test ( "div2" , function ( ) {

	var i , n ;

	n = 10 ;

	for ( i = 0 ; i < n ; ++i ) {
		one ( Math . random ( ) ) ;
	}

	one (  Infinity ) ;
	one ( -Infinity ) ;

} ) ;
