import test from 'ava';
import * as number from '../../../src/index.js';
import int32 from '@aureooms/js-int32';
import * as random from '@aureooms/js-random';

test('divmod', (t) => {
	const one = function (a, b) {
		t.deepEqual(number.divmod(a, b), [(a / b) | 0, a % b], a + ' /% ' + b);
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		const a = random.randint(int32.min, int32.max + 1);
		const b = random.randint(int32.min, int32.max + 1);
		one(a, b);
	}
});
