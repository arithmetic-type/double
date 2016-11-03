import test from 'ava' ;
import number from '../../src' ;

test( "decreasing", t => {

	t.ok( number.decreasing( Infinity,        0 )   < 0, "number <" );
	t.ok( number.decreasing( Infinity, Infinity ) === 0, "number =" );
	t.ok( number.decreasing(        0, Infinity )   > 0, "number >" );

} );
