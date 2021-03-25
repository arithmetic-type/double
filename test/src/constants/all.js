import test from 'ava' ;
import * as number from "../../../src/index.js" ;

test( "constants", t => {

	t.deepEqual( number.$_1(), -1, "$_1" );
	t.deepEqual( number.$0(), 0, "$0" );
	t.deepEqual( number.$1(), 1, "$1" );

	t.deepEqual( number.eq_1( -1 ), true, "eq_1 -1" );
	t.deepEqual( number.eq0( 0 ), true, "eq0 0" );
	t.deepEqual( number.eq1( 1 ), true, "eq1 1" );

	t.deepEqual( number.eq_1( 0 ), false, "eq_1 0" );
	t.deepEqual( number.eq0( 1 ), false, "eq0 1" );
	t.deepEqual( number.eq1( -1 ), false, "eq1 -1" );

	t.deepEqual( number.$2(), 2, "two" );
	t.deepEqual( number.$5(), 5, "five" );

} );
