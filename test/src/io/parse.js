import test from 'ava';
import * as double from '#module';

test('parse', (t) => {
	const one = function (a) {
		t.deepEqual(double.parse(a.toString()), a);
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		one(Math.random());
	}

	one(Number.POSITIVE_INFINITY);
	one(0);
	one(Number.NEGATIVE_INFINITY);
});
