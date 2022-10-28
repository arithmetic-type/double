import test from 'ava';
import * as double from '#module';

test('shl', (t) => {
	const n = 10;

	for (let i = 0; i < n; ++i) {
		const a = Math.floor(Math.random() * 2 ** 32);
		const b = Math.floor(Math.random() * 32);

		t.deepEqual(double.shl(a, b), a << b);
	}
});
