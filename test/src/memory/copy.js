import test from 'ava';
import * as number from '../../../src/index.js';

test('memory', (t) => {
	const one = function (a) {
		const b = number.copy(a);

		t.true(a === b, a + ' === ' + b);

		const x = Math.random();

		a -= x;

		t.true(a === b - x, a + ' === ' + b + ' - ' + x);
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		const a = Math.random();
		one(a);
	}

	one(Number.POSITIVE_INFINITY);
	one(0);
	one(Number.NEGATIVE_INFINITY);
});
