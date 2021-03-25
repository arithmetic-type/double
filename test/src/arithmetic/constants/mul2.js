import test from 'ava';
import * as number from '../../../../src/index.js';

test('mul2', (t) => {
	const one = function (a) {
		t.deepEqual(number.mul2(a), a * 2, a + ' * 2');
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
