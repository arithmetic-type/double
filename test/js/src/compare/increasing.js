

test( "increasing", function () {


	ok( number.increasing(        0, Infinity )   < 0, "number <" );
	ok( number.increasing( Infinity, Infinity ) === 0, "number =" );
	ok( number.increasing( Infinity,        0 )   > 0, "number >" );


} );
