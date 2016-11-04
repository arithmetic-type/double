import test from 'ava' ;
import * as number from '../../../src' ;

test( "increasing", t => {

	t.truthy( number.increasing(        0, Infinity )   < 0, "number <" );
	t.truthy( number.increasing( Infinity, Infinity ) === 0, "number =" );
	t.truthy( number.increasing( Infinity,        0 )   > 0, "number >" );

} );
