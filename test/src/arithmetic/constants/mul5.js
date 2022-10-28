import test from 'ava';
import * as number from '../../../../src/index.js';

test('mul5', (t) => {
	const one = function (a) {
		t.deepEqual(number.mul5(a), a * 5, `${n} * 5`);
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
