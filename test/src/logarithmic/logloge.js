import test from 'ava';

import * as double from '#module';

const epsilon = 1e-6;

const compare = double.relapprox(epsilon);

const e = Math.E;

test('logloge', (t) => {
	const one = function (n, expected) {
		const computed = double.logloge(n);

		const isok = compare(computed, expected) === 0;

		t.true(isok, `logloge(${n}) is ${expected} got ${computed}`);
	};

	one(Math.pow(e * Math.sqrt(e)), 1.5);
	one(Math.pow(e * e * Math.sqrt(e)), 2.5);
	one(Math.pow(e * e * e * Math.sqrt(e)), 3.5);
});
