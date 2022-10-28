import test from 'ava';
import * as double from '#module';

test('increasing', (t) => {
	t.true(double.increasing(0, Number.POSITIVE_INFINITY) < 0, 'number <');
	t.true(
		double.increasing(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY) === 0,
		'number =',
	);
	t.true(double.increasing(Number.POSITIVE_INFINITY, 0) > 0, 'number >');
});
