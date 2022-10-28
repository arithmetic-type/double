import test from 'ava';
import * as number from '#module';

test('log2', (t) => {
	const one = function (n) {
		const expected = Math.log2(n);
		t.deepEqual(number.log2(n), expected);
	};

	one(1);
	one(2 * 2 * 2);
	one(2 * 2 * 2 * 2);

	one(2 * 2 * 2 * Math.sqrt(2));
});
