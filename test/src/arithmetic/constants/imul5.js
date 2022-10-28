import test from 'ava';
import * as double from '#module';

test('imul5', (t) => {
	const one = function (a) {
		const x = a;

		t.deepEqual(double.imul5(x), (a *= 5));
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
