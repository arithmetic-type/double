import test from 'ava';
import * as number from '#module';

const e = Math.E;

test('loge', (t) => {
	const one = function (n, expected) {
		t.deepEqual(number.loge(n), expected);
	};

	one(e * Math.sqrt(e), 1.5);
	one(e * e * Math.sqrt(e), 2.5);
	one(e * e * e * Math.sqrt(e), 3.5);
});
