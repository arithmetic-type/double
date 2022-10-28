import test from 'ava';
import * as double from '#module';

test('decreasing', (t) => {
	t.true(double.decreasing(Number.POSITIVE_INFINITY, 0) < 0, 'number <');
	t.true(
		double.decreasing(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY) === 0,
		'number =',
	);
	t.true(double.decreasing(0, Number.POSITIVE_INFINITY) > 0, 'number >');
});
