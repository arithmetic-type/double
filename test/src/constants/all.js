import test from 'ava';

import * as double from '#module';

test('constants', (t) => {
	t.deepEqual(double.$_1(), -1, '$_1');
	t.is(double.$0(), 0, '$0');
	t.is(double.$1(), 1, '$1');

	t.is(double.eq_1(-1), true, 'eq_1 -1');
	t.is(double.eq0(0), true, 'eq0 0');
	t.is(double.eq1(1), true, 'eq1 1');

	t.is(double.eq_1(0), false, 'eq_1 0');
	t.is(double.eq0(1), false, 'eq0 1');
	t.is(double.eq1(-1), false, 'eq1 -1');

	t.is(double.$2(), 2, 'two');
	t.is(double.$5(), 5, 'five');
});
