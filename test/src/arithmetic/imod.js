import test from 'ava';

import {min, max} from '@arithmetic-type/int32';
import {randint} from '@randomized/random';

import {imod} from '../../../src/index.js';

test('imod', (t) => {
	const one = function (a, b) {
		const x = a;

		t.deepEqual(imod(x, b), (a %= b));
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		const a = randint(min, max + 1);
		const b = randint(min, max + 1);
		one(a, b);
	}
});
