import test from 'ava';
import * as double from '#module';

test('mul2', (t) => {
	const one = function (a) {
		t.deepEqual(double.mul2(a), a * 2);
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
