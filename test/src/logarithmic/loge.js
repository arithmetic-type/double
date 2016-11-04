
var one , e ;

one = function ( n , expected ) {

	deepEqual ( number.loge ( n ) , expected , "loge ( " + n + " )" ) ;

} ;

e = Math.E ;

test ( "loge" , function ( ) {

	one ( e * Math.sqrt ( e ) , 1.5 ) ;
	one ( e * e * Math.sqrt ( e ) , 2.5 ) ;
	one ( e * e * e * Math.sqrt ( e ) , 3.5 ) ;

} ) ;
