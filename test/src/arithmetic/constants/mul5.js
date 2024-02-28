import test from 'ava';

import * as double from '#module';

test('mul5', (t) => {
	const one = function (a) {
		t.deepEqual(double.mul5(a), a * 5, `${n} * 5`);
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
