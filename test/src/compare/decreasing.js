import test from 'ava';
import * as number from '#module';

test('decreasing', (t) => {
	t.true(number.decreasing(Number.POSITIVE_INFINITY, 0) < 0, 'number <');
	t.true(
		number.decreasing(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY) === 0,
		'number =',
	);
	t.true(number.decreasing(0, Number.POSITIVE_INFINITY) > 0, 'number >');
});
