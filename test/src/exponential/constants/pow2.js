import test from 'ava';

import * as double from '#module';

test('pow2', (t) => {
	const one = function (a) {
		t.deepEqual(double.pow2(a), a * a, `${a}^2`);
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
