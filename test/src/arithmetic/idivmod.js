import test from 'ava';

import {min, max} from '@arithmetic-type/int32';
import {randint} from '@randomized/random';

import {idivmod} from '#module';

test('idivmod', (t) => {
	const one = function (a, b) {
		const q = (a / b) | 0;
		const x = a;

		t.deepEqual(idivmod(x, b), [q, (a %= b)]);
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		const a = randint(min, max + 1);
		const b = randint(min, max + 1);
		one(a, b);
	}
});
