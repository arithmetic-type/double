import test from 'ava';
import * as number from '#module';

test('ishl', (t) => {
	const n = 10;

	for (let i = 0; i < n; ++i) {
		let a = Math.floor(Math.random() * 2 ** 32);
		const b = Math.floor(Math.random() * 32);
		const x = a;

		t.deepEqual(number.ishl(x, b), (a <<= b));
	}
});
