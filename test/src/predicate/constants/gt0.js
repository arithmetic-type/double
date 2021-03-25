import test from 'ava';
import * as number from '../../../../src/index.js';

test('gt0', (t) => {
	const one = function (n) {
		t.deepEqual(number.gt0(n), n > 0, n + ' > ' + 0);
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		one(Math.random() - 0.5);
	}

	one(Number.POSITIVE_INFINITY);
	one(Number.NEGATIVE_INFINITY);
});
