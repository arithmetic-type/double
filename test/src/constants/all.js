

test( "constants", function () {

	deepEqual( number.$_1(), -1, "$_1" );
	deepEqual( number.$0(), 0, "$0" );
	deepEqual( number.$1(), 1, "$1" );

	deepEqual( number.eq_1( -1 ), true, "eq_1 -1" );
	deepEqual( number.eq0( 0 ), true, "eq0 0" );
	deepEqual( number.eq1( 1 ), true, "eq1 1" );

	deepEqual( number.eq_1( 0 ), false, "eq_1 0" );
	deepEqual( number.eq0( 1 ), false, "eq0 1" );
	deepEqual( number.eq1( -1 ), false, "eq1 -1" );

	deepEqual( number.$2(), 2, "two" );
	deepEqual( number.$5(), 5, "five" );

} );
