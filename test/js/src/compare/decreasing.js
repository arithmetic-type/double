

test( "decreasing", function () {


	ok( number.decreasing( Infinity,        0 )   < 0, "number <" );
	ok( number.decreasing( Infinity, Infinity ) === 0, "number =" );
	ok( number.decreasing(        0, Infinity )   > 0, "number >" );


} );
