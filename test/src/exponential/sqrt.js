import test from 'ava';
import * as double from '#module';

test('sqrt', (t) => {
	const one = function (a) {
		t.deepEqual(double.sqrt(a), Math.sqrt(a), `sqrt(${a})`);
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		const a = Math.random();
		one(a);
	}

	one(Number.POSITIVE_INFINITY);
	one(0);
	t.true(Number.isNaN(double.sqrt(Number.NEGATIVE_INFINITY)), 'sqrt(-oo)');
});
