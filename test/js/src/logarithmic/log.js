
var one , e ;

one = function ( a , b , expected ) {

	deepEqual ( number.log ( a , b ) , expected , "log ( " + a + " , " + b + " )" ) ;

} ;

e = Math.E ;

test ( "log" , function ( ) {

	one ( 2 , 1 , 0 ) ;
	one ( 2 , 2 * 2 * 2 , 3 ) ;
	one ( 2 , 2 * 2 * 2 * 2 , 4 ) ;

	one ( 2 , 2 * 2 * 2 * Math.sqrt ( 2 ) , 3.5 ) ;

	one ( 3 , 3 * 3 , 2 ) ;
	one ( 3 , 3 * 3 * 3 * 3 , 4 ) ;

	one ( 5 , 5 * 5 * Math.sqrt ( 5 ) , 2.5 ) ;

	one ( e , e * Math.sqrt ( e ) , 1.5 ) ;
	one ( e , e * e * Math.sqrt ( e ) , 2.5 ) ;
	one ( e , e * e * e * Math.sqrt ( e ) , 3.5 ) ;

} ) ;
