import test from 'ava' ;
import * as number from '../../../src' ;
import algo from "@aureooms/js-algo" ;

const epsilon = 1e-6 ;

const compare = algo . __relepsilon__ ( epsilon ) ;

const e = Math.E ;

test ( "loglog" , t => {

	const one = function ( a , b , expected ) {

		const computed = number.loglog ( a , b ) ;

		const isok = compare ( computed , expected ) === 0 ;

		t.truthy ( isok , "loglog ( " + a + " , " + b + " ) is " + expected + " got " + computed ) ;

	} ;

	one ( 2 , Math.pow ( 2 , 1 ) , 0 ) ;
	one ( 2 , Math.pow ( 2 , 2 * 2 * 2 ) , 3 ) ;
	one ( 2 , Math.pow ( 2 , 2 * 2 * 2 * 2 ) , 4 ) ;

	one ( 2 , Math.pow ( 2 * 2 * 2 * Math.sqrt ( 2 ) ) , 3.5 ) ;

	one ( 3 , Math.pow ( 3 , 3 * 3 ) , 2 ) ;
	one ( 3 , Math.pow ( 3 , 3 * 3 * 3 * 3 ) , 4 ) ;

	one ( 5 , Math.pow ( 5 , 5 * 5 * Math.sqrt ( 5 ) ) , 2.5 ) ;

	one ( e , Math.pow ( e * Math.sqrt ( e ) ) , 1.5 ) ;
	one ( e , Math.pow ( e * e * Math.sqrt ( e ) ) , 2.5 ) ;
	one ( e , Math.pow ( e * e * e * Math.sqrt ( e ) ) , 3.5 ) ;

} ) ;
