

test( "constants", function () {

	deepEqual( number.negativeone(), -1, "negativeone" );
	deepEqual( number.zero(), 0, "zero" );
	deepEqual( number.one(), 1, "one" );

	deepEqual( number.isnegativeone( -1 ), true, "isnegativeone -1" );
	deepEqual( number.iszero( 0 ), true, "iszero 0" );
	deepEqual( number.isone( 1 ), true, "isone 1" );

	deepEqual( number.isnegativeone( 0 ), false, "isnegativeone 0" );
	deepEqual( number.iszero( 1 ), false, "iszero 1" );
	deepEqual( number.isone( -1 ), false, "isone -1" );

	deepEqual( number.two(), 2, "two" );

} );
