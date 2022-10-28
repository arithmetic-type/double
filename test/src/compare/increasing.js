import test from 'ava';
import * as number from '#module';

test('increasing', (t) => {
	t.true(number.increasing(0, Number.POSITIVE_INFINITY) < 0, 'number <');
	t.true(
		number.increasing(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY) === 0,
		'number =',
	);
	t.true(number.increasing(Number.POSITIVE_INFINITY, 0) > 0, 'number >');
});
