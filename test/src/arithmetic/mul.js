import test from 'ava';

import * as double from '#module';

test('mul', (t) => {
	const one = function (a, b) {
		t.deepEqual(double.mul(a, b), a * b);
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		const a = Math.random();
		const b = Math.random();
		one(a, b);
	}

	one(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
	one(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
	one(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
	one(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);

	const nan = function (a, b) {
		t.true(Number.isNaN(double.mul(a, b)));
	};

	nan(Number.POSITIVE_INFINITY, 0);
	nan(0, Number.POSITIVE_INFINITY);
	nan(Number.NEGATIVE_INFINITY, 0);
	nan(0, Number.NEGATIVE_INFINITY);
});
