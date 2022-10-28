import test from 'ava';

import {macro} from './_fixtures.js';
import {
	eq0,
	eq1,
	eq_1,
	le0,
	lt0,
	ge0,
	gt0,
	le1,
	lt1,
	ge1,
	gt1,
	ge,
	lt,
	le,
	gt,
	eq,
	ne,
} from '#module';

const n = 10;

test(macro, false, eq0, Number.POSITIVE_INFINITY);
test(macro, false, eq0, Number.MAX_VALUE);
test(macro, false, eq0, 1 + Number.EPSILON);
test(macro, false, eq0, 1);
test(macro, false, eq0, 1 - Number.EPSILON);
test(macro, false, eq0, Number.EPSILON);
test(macro, false, eq0, Number.MIN_VALUE);
test(macro, true, eq0, 0);
test(macro, false, eq0, -Number.MIN_VALUE);
test(macro, false, eq0, -Number.EPSILON);
test(macro, false, eq0, -1);
test(macro, false, eq0, -Number.MAX_VALUE);
test(macro, false, eq0, Number.NEGATIVE_INFINITY);

test(macro, false, eq1, Number.POSITIVE_INFINITY);
test(macro, false, eq1, Number.MAX_VALUE);
test(macro, false, eq1, 1 + Number.EPSILON);
test(macro, true, eq1, 1);
test(macro, false, eq1, 1 - Number.EPSILON);
test(macro, false, eq1, Number.EPSILON);
test(macro, false, eq1, Number.MIN_VALUE);
test(macro, false, eq1, 0);
test(macro, false, eq1, -Number.MIN_VALUE);
test(macro, false, eq1, -Number.EPSILON);
test(macro, false, eq1, -1);
test(macro, false, eq1, -Number.MAX_VALUE);
test(macro, false, eq1, Number.NEGATIVE_INFINITY);

test(macro, false, eq_1, Number.POSITIVE_INFINITY);
test(macro, false, eq_1, Number.MAX_VALUE);
test(macro, false, eq_1, 1 + Number.EPSILON);
test(macro, false, eq_1, 1);
test(macro, false, eq_1, 1 - Number.EPSILON);
test(macro, false, eq_1, Number.EPSILON);
test(macro, false, eq_1, Number.MIN_VALUE);
test(macro, false, eq_1, 0);
test(macro, false, eq_1, -Number.MIN_VALUE);
test(macro, false, eq_1, -Number.EPSILON);
test(macro, true, eq_1, -1);
test(macro, false, eq_1, -Number.MAX_VALUE);
test(macro, false, eq_1, Number.NEGATIVE_INFINITY);

test(macro, false, lt0, Number.POSITIVE_INFINITY);
test(macro, false, lt0, Number.MAX_VALUE);
test(macro, false, lt0, 1 + Number.EPSILON);
test(macro, false, lt0, 1);
test(macro, false, lt0, 1 - Number.EPSILON);
test(macro, false, lt0, Number.EPSILON);
test(macro, false, lt0, Number.MIN_VALUE);
test(macro, false, lt0, 0);
test(macro, true, lt0, -Number.MIN_VALUE);
test(macro, true, lt0, -Number.EPSILON);
test(macro, true, lt0, -Number.MAX_VALUE);
test(macro, true, lt0, Number.NEGATIVE_INFINITY);

test(macro, false, le0, Number.POSITIVE_INFINITY);
test(macro, false, le0, Number.MAX_VALUE);
test(macro, false, le0, 1 + Number.EPSILON);
test(macro, false, le0, 1);
test(macro, false, le0, 1 - Number.EPSILON);
test(macro, false, le0, Number.EPSILON);
test(macro, false, le0, Number.MIN_VALUE);
test(macro, true, le0, 0);
test(macro, true, le0, -Number.MIN_VALUE);
test(macro, true, le0, -Number.EPSILON);
test(macro, true, le0, -Number.MAX_VALUE);
test(macro, true, le0, Number.NEGATIVE_INFINITY);

test(macro, true, gt0, Number.POSITIVE_INFINITY);
test(macro, true, gt0, Number.MAX_VALUE);
test(macro, true, gt0, 1 + Number.EPSILON);
test(macro, true, gt0, 1);
test(macro, true, gt0, 1 - Number.EPSILON);
test(macro, true, gt0, Number.EPSILON);
test(macro, true, gt0, Number.MIN_VALUE);
test(macro, false, gt0, 0);
test(macro, false, gt0, -Number.MIN_VALUE);
test(macro, false, gt0, -Number.EPSILON);
test(macro, false, gt0, -Number.MAX_VALUE);
test(macro, false, gt0, Number.NEGATIVE_INFINITY);

test(macro, true, ge0, Number.POSITIVE_INFINITY);
test(macro, true, ge0, Number.MAX_VALUE);
test(macro, true, ge0, 1 + Number.EPSILON);
test(macro, true, ge0, 1);
test(macro, true, ge0, 1 - Number.EPSILON);
test(macro, true, ge0, Number.EPSILON);
test(macro, true, ge0, Number.MIN_VALUE);
test(macro, true, ge0, 0);
test(macro, false, ge0, -Number.MIN_VALUE);
test(macro, false, ge0, -Number.EPSILON);
test(macro, false, ge0, -Number.MAX_VALUE);
test(macro, false, ge0, Number.NEGATIVE_INFINITY);

test(macro, false, lt1, Number.POSITIVE_INFINITY);
test(macro, false, lt1, Number.MAX_VALUE);
test(macro, false, lt1, 1 + Number.EPSILON);
test(macro, false, lt1, 1);
test(macro, true, lt1, 1 - Number.EPSILON);
test(macro, true, lt1, Number.EPSILON);
test(macro, true, lt1, Number.MIN_VALUE);
test(macro, true, lt1, 0);
test(macro, true, lt1, -Number.MIN_VALUE);
test(macro, true, lt1, -Number.EPSILON);
test(macro, true, lt1, -Number.MAX_VALUE);
test(macro, true, lt1, Number.NEGATIVE_INFINITY);

test(macro, false, le1, Number.POSITIVE_INFINITY);
test(macro, false, le1, Number.MAX_VALUE);
test(macro, false, le1, 1 + Number.EPSILON);
test(macro, true, le1, 1);
test(macro, true, le1, 1 - Number.EPSILON);
test(macro, true, le1, Number.EPSILON);
test(macro, true, le1, Number.MIN_VALUE);
test(macro, true, le1, 0);
test(macro, true, le1, -Number.MIN_VALUE);
test(macro, true, le1, -Number.EPSILON);
test(macro, true, le1, -Number.MAX_VALUE);
test(macro, true, le1, Number.NEGATIVE_INFINITY);

test(macro, true, gt1, Number.POSITIVE_INFINITY);
test(macro, true, gt1, Number.MAX_VALUE);
test(macro, true, gt1, 1 + Number.EPSILON);
test(macro, false, gt1, 1);
test(macro, false, gt1, 1 - Number.EPSILON);
test(macro, false, gt1, Number.EPSILON);
test(macro, false, gt1, Number.MIN_VALUE);
test(macro, false, gt1, 0);
test(macro, false, gt1, -Number.MIN_VALUE);
test(macro, false, gt1, -Number.EPSILON);
test(macro, false, gt1, -Number.MAX_VALUE);
test(macro, false, gt1, Number.NEGATIVE_INFINITY);

test(macro, true, ge1, Number.POSITIVE_INFINITY);
test(macro, true, ge1, Number.MAX_VALUE);
test(macro, true, ge1, 1 + Number.EPSILON);
test(macro, true, ge1, 1);
test(macro, false, ge1, 1 - Number.EPSILON);
test(macro, false, ge1, Number.EPSILON);
test(macro, false, ge1, Number.MIN_VALUE);
test(macro, false, ge1, 0);
test(macro, false, ge1, -Number.MIN_VALUE);
test(macro, false, ge1, -Number.EPSILON);
test(macro, false, ge1, -Number.MAX_VALUE);
test(macro, false, ge1, Number.NEGATIVE_INFINITY);

for (let i = 0; i < n; ++i) {
	const x = Math.random();
	test(macro, true, ge, x, x);
	test(macro, true, ge, x, x - Number.EPSILON);
	test(macro, false, ge, x, x + Number.EPSILON);
}

test(macro, !false, ge, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
test(macro, !false, ge, Number.POSITIVE_INFINITY, 0);
test(macro, !true, ge, 0, Number.POSITIVE_INFINITY);
test(macro, !false, ge, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
test(macro, !true, ge, Number.NEGATIVE_INFINITY, 0);
test(macro, !false, ge, 0, Number.NEGATIVE_INFINITY);
test(macro, !true, ge, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
test(macro, !false, ge, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);

for (let i = 0; i < n; ++i) {
	const x = Math.random();
	test(macro, true, eq, x, x);
	test(macro, false, eq, x, x - Number.EPSILON);
	test(macro, false, eq, x, x + Number.EPSILON);
}

test(macro, true, eq, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
test(macro, false, eq, Number.POSITIVE_INFINITY, 0);
test(macro, false, eq, 0, Number.POSITIVE_INFINITY);
test(macro, true, eq, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
test(macro, false, eq, Number.NEGATIVE_INFINITY, 0);
test(macro, false, eq, 0, Number.NEGATIVE_INFINITY);
test(macro, false, eq, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
test(macro, false, eq, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);

for (let i = 0; i < n; ++i) {
	const x = Math.random();
	test(macro, false, gt, x, x);
	test(macro, true, gt, x, x - Number.EPSILON);
	test(macro, false, gt, x, x + Number.EPSILON);
}

test(macro, false, gt, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
test(macro, true, gt, Number.POSITIVE_INFINITY, 0);
test(macro, false, gt, 0, Number.POSITIVE_INFINITY);
test(macro, false, gt, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
test(macro, false, gt, Number.NEGATIVE_INFINITY, 0);
test(macro, true, gt, 0, Number.NEGATIVE_INFINITY);
test(macro, false, gt, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
test(macro, true, gt, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);

for (let i = 0; i < n; ++i) {
	const x = Math.random();
	test(macro, true, le, x, x);
	test(macro, false, le, x, x - Number.EPSILON);
	test(macro, true, le, x, x + Number.EPSILON);
}

test(macro, true, le, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
test(macro, false, le, Number.POSITIVE_INFINITY, 0);
test(macro, true, le, 0, Number.POSITIVE_INFINITY);
test(macro, true, le, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
test(macro, true, le, Number.NEGATIVE_INFINITY, 0);
test(macro, false, le, 0, Number.NEGATIVE_INFINITY);
test(macro, true, le, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
test(macro, false, le, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);

for (let i = 0; i < n; ++i) {
	const x = Math.random();
	test(macro, false, lt, x, x);
	test(macro, false, lt, x, x - Number.EPSILON);
	test(macro, true, lt, x, x + Number.EPSILON);
}

test(macro, false, lt, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
test(macro, false, lt, Number.POSITIVE_INFINITY, 0);
test(macro, true, lt, 0, Number.POSITIVE_INFINITY);
test(macro, false, lt, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
test(macro, true, lt, Number.NEGATIVE_INFINITY, 0);
test(macro, false, lt, 0, Number.NEGATIVE_INFINITY);
test(macro, true, lt, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
test(macro, false, lt, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);

for (let i = 0; i < n; ++i) {
	const x = Math.random();
	test(macro, false, ne, x, x);
	test(macro, true, ne, x, x - Number.EPSILON);
	test(macro, true, ne, x, x + Number.EPSILON);
}

test(macro, false, ne, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
test(macro, true, ne, Number.POSITIVE_INFINITY, 0);
test(macro, true, ne, 0, Number.POSITIVE_INFINITY);
test(macro, false, ne, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
test(macro, true, ne, Number.NEGATIVE_INFINITY, 0);
test(macro, true, ne, 0, Number.NEGATIVE_INFINITY);
test(macro, true, ne, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
test(macro, true, ne, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
