import test from 'ava';
import * as number from '../../../src/index.js';

test('add', (t) => {
	const one = function (a, b) {
		t.is(number.add(a, b), a + b);
	};

	const n = 10;

	for (let i = 0; i < n; ++i) {
		const a = Math.random();
		const b = Math.random();

		one(a, b);
	}

	one(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
	one(Number.POSITIVE_INFINITY, 0);
	one(0, Number.POSITIVE_INFINITY);
	one(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
	one(Number.NEGATIVE_INFINITY, 0);
	one(0, Number.NEGATIVE_INFINITY);

	t.true(
		Number.isNaN(
			number.add(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY),
		),
		'-Infinity + Infinity',
	);
	t.true(
		Number.isNaN(
			number.add(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY),
		),
		'Infinity + -Infinity',
	);
});
