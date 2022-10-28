import test from 'ava';
import * as number from '#module';

const epsilon = 1e-6;

const compare = number.relapprox(epsilon);

test('loglog2', (t) => {
	const one = function (n, expected) {
		const computed = number.loglog2(n);

		const isok = compare(computed, expected) === 0;

		t.true(isok);
	};

	one(2 ** 1, 0);
	one(2 ** (2 * 2 * 2), 3);
	one(2 ** (2 * 2 * 2 * 2), 4);

	one(Math.pow(2 * 2 * 2 * Math.sqrt(2)), 3.5);
});
