import test from 'ava';
import * as double from '#module';

test('stringify', (t) => {
	const one = function (a) {
		t.deepEqual(double.stringify(a), a.toString());
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		one(Math.random());
	}

	one(Number.POSITIVE_INFINITY);
	one(0);
	one(Number.NEGATIVE_INFINITY);
});
