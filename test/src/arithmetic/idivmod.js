
var one , int32 , random ;

int32 = require ( "aureooms-js-int32" ) ;
random = require ( "aureooms-js-random" ) ;

one = function ( a , b ) {

	var q , r ;

	q = a / b | 0 ;
	x = a ;

	deepEqual ( number . idivmod ( x , b ) , [ q , a %= b ] , x + " /%= " + b ) ;

} ;

test ( "idivmod" , function ( ) {

	var a , b , i , n ;

	n = 10 ;

	for ( i = 0 ; i < n ; ++i ) {
		a = random . randint ( int32 . min , int32 . max + 1 ) ;
		b = random . randint ( int32 . min , int32 . max + 1 ) ;
		one ( a , b ) ;
	}

} ) ;
