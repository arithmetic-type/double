import test from 'ava';
import * as double from '#module';

test('log2', (t) => {
	const one = function (n) {
		const expected = Math.log2(n);
		t.deepEqual(double.log2(n), expected);
	};

	one(1);
	one(2 * 2 * 2);
	one(2 * 2 * 2 * 2);

	one(2 * 2 * 2 * Math.sqrt(2));
});
