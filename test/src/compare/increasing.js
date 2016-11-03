import test from 'ava' ;
import number from '../../src' ;

test( "increasing", t => {

	t.ok( number.increasing(        0, Infinity )   < 0, "number <" );
	t.ok( number.increasing( Infinity, Infinity ) === 0, "number =" );
	t.ok( number.increasing( Infinity,        0 )   > 0, "number >" );

} );
