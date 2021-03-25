import test from 'ava';
import * as number from '../../../src/index.js';

test('stringify', (t) => {
	const one = function (a) {
		t.deepEqual(number.stringify(a), a.toString(), 'stringify(' + a + ')');
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		one(Math.random());
	}

	one(Number.POSITIVE_INFINITY);
	one(0);
	one(Number.NEGATIVE_INFINITY);
});
