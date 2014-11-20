
var one , algo , epsilon , compare, e ;

algo = require ( "aureooms-js-algo" ) ;

epsilon = 1e-6 ;

compare = algo . __relepsilon__ ( epsilon ) ;

one = function ( n , expected ) {

	var computed , isok ;

	computed = number.loglog2 ( n ) ;

	isok = compare ( computed , expected ) === 0 ;

	ok ( isok , "loglog2 ( " + n + " ) is " + expected + " got " + computed ) ;

} ;

test ( "loglog2" , function ( ) {

	one ( Math.pow ( 2 , 1 ) , 0 ) ;
	one ( Math.pow ( 2 , 2 * 2 * 2 ) , 3 ) ;
	one ( Math.pow ( 2 , 2 * 2 * 2 * 2 ) , 4 ) ;

	one ( Math.pow ( 2 * 2 * 2 * Math.sqrt ( 2 ) ) , 3.5 ) ;

} ) ;
