
var one , algo , epsilon , compare, e ;

algo = require ( "aureooms-js-algo" ) ;

epsilon = 1e-6 ;

compare = algo . __relepsilon__ ( epsilon ) ;

one = function ( n , expected ) {

	var computed , isok ;

	computed = number.logloge ( n ) ;

	isok = compare ( computed , expected ) === 0 ;

	ok ( isok , "logloge ( " + n + " ) is " + expected + " got " + computed ) ;

} ;

e = Math.E ;

test ( "logloge" , function ( ) {

	one ( Math.pow ( e * Math.sqrt ( e ) ) , 1.5 ) ;
	one ( Math.pow ( e * e * Math.sqrt ( e ) ) , 2.5 ) ;
	one ( Math.pow ( e * e * e * Math.sqrt ( e ) ) , 3.5 ) ;

} ) ;
