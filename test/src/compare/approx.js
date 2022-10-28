import test from 'ava';

import {absapprox, relapprox} from '../../../src/index.js';

test('approx', (t) => {
	const epsilon = Math.pow(2, -10);
	const morethanepsilon = epsilon + epsilon / 128;

	const absepsilon = absapprox(epsilon);
	const relepsilon = relapprox(epsilon);

	t.true(absepsilon(0, 0) === 0, ' absolute 0 === 0 ');
	t.true(relepsilon(0, 0) === 0, ' relative 0 === 0 ');

	t.true(absepsilon(epsilon, 0) === 0, ' absolute  e ===  0 ');
	t.true(absepsilon(-epsilon, 0) === 0, ' absolute -e ===  0 ');
	t.true(absepsilon(0, epsilon) === 0, ' absolute  0 ===  e ');
	t.true(absepsilon(0, -epsilon) === 0, ' absolute  0 === -e ');

	t.true(relepsilon(epsilon, 0) > 0, ' relative  e  >   0 ');
	t.true(relepsilon(-epsilon, 0) < 0, ' relative -e  <   0 ');
	t.true(relepsilon(0, epsilon) < 0, ' relative  0  <   e ');
	t.true(relepsilon(0, -epsilon) > 0, ' relative  0  >  -e ');

	t.true(absepsilon(morethanepsilon, 0) > 0, " absolute  e'  >   0  ");
	t.true(absepsilon(-morethanepsilon, 0) < 0, " absolute -e'  <   0  ");
	t.true(absepsilon(0, morethanepsilon) < 0, " absolute  0   <   e' ");
	t.true(absepsilon(0, -morethanepsilon) > 0, " absolute  0   <  -e' ");

	t.true(relepsilon(morethanepsilon, 0) > 0, " relative  e'  >   0  ");
	t.true(relepsilon(-morethanepsilon, 0) < 0, " relative -e'  <   0  ");
	t.true(relepsilon(0, morethanepsilon) < 0, " relative  0   <   e' ");
	t.true(relepsilon(0, -morethanepsilon) > 0, " relative  0   >  -e' ");

	t.true(absepsilon(1 + epsilon, 1) === 0, ' absolute  1 + e ===  1 ');
	t.true(absepsilon(1 - epsilon, 1) === 0, ' absolute  1 - e ===  1 ');
	t.true(absepsilon(1, 1 + epsilon) === 0, ' absolute  1     ===  1 + e ');
	t.true(absepsilon(1, 1 - epsilon) === 0, ' absolute  1     ===  1 - e ');

	t.true(
		relepsilon(1 * (1 + epsilon), 1) === 0,
		' relative  1 * ( 1 + e ) ===  1 ',
	);
	t.true(
		relepsilon(1 / (1 + epsilon), 1) === 0,
		' relative  1 / ( 1 + e ) ===  1 ',
	);
	t.true(
		relepsilon(1, 1 * (1 + epsilon)) === 0,
		' relative  1     ===  1 * ( 1 + e ) ',
	);
	t.true(
		relepsilon(1, 1 / (1 + epsilon)) === 0,
		' relative  1     ===  1 / ( 1 + e ) ',
	);

	t.true(absepsilon(1 + morethanepsilon, 1) > 0, " absolute  1 + e'  >  1 ");
	t.true(absepsilon(1 - morethanepsilon, 1) < 0, " absolute  1 - e'  <  1 ");
	t.true(
		absepsilon(1, 1 + morethanepsilon) < 0,
		" absolute  1       <  1 + e' ",
	);
	t.true(
		absepsilon(1, 1 - morethanepsilon) > 0,
		" absolute  1       >  1 - e' ",
	);

	t.true(
		relepsilon(1 * (1 + morethanepsilon), 1) > 0,
		" relative  1 * ( 1 + e' ) >  1 ",
	);
	t.true(
		relepsilon(1 / (1 + morethanepsilon), 1) < 0,
		" relative  1 / ( 1 + e' ) <  1 ",
	);
	t.true(
		relepsilon(1, 1 * (1 + morethanepsilon)) < 0,
		" relative  1     <  1 * ( 1 + e' ) ",
	);
	t.true(
		relepsilon(1, 1 / (1 + morethanepsilon)) > 0,
		" relative  1     >  1 / ( 1 + e' ) ",
	);
});
