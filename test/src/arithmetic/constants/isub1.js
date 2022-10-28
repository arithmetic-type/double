import test from 'ava';
import * as number from '../../../../src/index.js';

test('isub1', (t) => {
	const one = function (n) {
		const x = n;

		t.deepEqual(number.isub1(x), (n -= 1));
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		one(Math.random());
	}

	one(Number.POSITIVE_INFINITY);
	one(Number.NEGATIVE_INFINITY);
});
