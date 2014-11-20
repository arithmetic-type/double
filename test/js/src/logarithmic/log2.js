
var one ;

one = function ( n , expected ) {

	deepEqual ( number.log2 ( n ) , expected , "log2 ( " + n + " )" ) ;

} ;

test ( "log2" , function ( ) {

	one ( 1 , 0 ) ;
	one ( 2 * 2 * 2 , 3 ) ;
	one ( 2 * 2 * 2 * 2 , 4 ) ;

	one ( 2 * 2 * 2 * Math.sqrt ( 2 ) , 3.5 ) ;

} ) ;
