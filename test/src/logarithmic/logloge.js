import test from 'ava' ;
import number from '../../../src' ;
import algo from "aureooms-js-algo" ;

const epsilon = 1e-6 ;

const compare = algo . __relepsilon__ ( epsilon ) ;

const e = Math.E ;

test ( "logloge" , t => {

	const one = function ( n , expected ) {

		const computed = number.logloge ( n ) ;

		const isok = compare ( computed , expected ) === 0 ;

		t.truthy ( isok , "logloge ( " + n + " ) is " + expected + " got " + computed ) ;

	} ;


	one ( Math.pow ( e * Math.sqrt ( e ) ) , 1.5 ) ;
	one ( Math.pow ( e * e * Math.sqrt ( e ) ) , 2.5 ) ;
	one ( Math.pow ( e * e * e * Math.sqrt ( e ) ) , 3.5 ) ;

} ) ;
