import test from 'ava';

import * as double from '#module';

test('sub', (t) => {
	const one = function (a, b) {
		t.deepEqual(double.sub(a, b), a - b);
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		const a = Math.random();
		const b = Math.random();
		one(a, b);
	}

	one(Number.POSITIVE_INFINITY, 0);
	one(0, Number.POSITIVE_INFINITY);
	one(Number.NEGATIVE_INFINITY, 0);
	one(0, Number.NEGATIVE_INFINITY);
	one(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
	one(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);

	t.true(
		Number.isNaN(
			double.sub(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY),
		),
		'Infinity - Infinity',
	);
	t.true(
		Number.isNaN(
			double.sub(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY),
		),
		'-Infinity - -Infinity',
	);
});
