import test from 'ava' ;
import * as number from "../../../src/index.js" ;

test( "decreasing", t => {

	t.truthy( number.decreasing( Infinity,        0 )   < 0, "number <" );
	t.truthy( number.decreasing( Infinity, Infinity ) === 0, "number =" );
	t.truthy( number.decreasing(        0, Infinity )   > 0, "number >" );

} );
