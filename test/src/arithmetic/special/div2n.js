import test from 'ava';

import * as double from '#module';

test('div2n', (t) => {
	const one = function (n, l) {
		t.deepEqual(double.div2n(n, l), n / 2 ** l, `${n} / ${2 ** l}`);
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		one(Math.random(), i);
	}

	one(Number.POSITIVE_INFINITY, 4);
	one(0, 4);
	one(Number.NEGATIVE_INFINITY, 4);
});
