import test from 'ava';

import * as double from '#module';

test('imul2', (t) => {
	const one = function (a) {
		const x = a;

		t.deepEqual(double.imul2(x), (a *= 2));
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
