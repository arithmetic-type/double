import test from 'ava';
import * as number from '../../../src/index.js';

const e = Math.E;

test('log', (t) => {
	const one = function (a, b) {
		const expected = Math.log(b) / Math.log(a);
		t.deepEqual(number.log(a, b), expected, 'log ( ' + a + ' , ' + b + ' )');
	};

	one(2, 1);
	one(2, 2 * 2 * 2);
	one(2, 2 * 2 * 2 * 2);

	one(2, 2 * 2 * 2 * Math.sqrt(2));

	one(3, 3 * 3);
	one(3, 3 * 3 * 3 * 3);

	one(5, 5 * 5 * Math.sqrt(5));

	one(e, e * Math.sqrt(e));
	one(e, e * e * Math.sqrt(e));
	one(e, e * e * e * Math.sqrt(e));
});
