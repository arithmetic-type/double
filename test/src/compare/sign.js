import test from 'ava';

import {sign} from '../../../src/index.js';

const macro = (t, input, output) => {
	t.is(sign(input), output);
};

macro.title = (title, input, output) => title ?? `sign(${input}) = ${output}`;

test(macro, 0, 0);

test(macro, -1, -1);
test(macro, 1, 1);

test(macro, -999, -1);
test(macro, 999, 1);

test(macro, Number.MIN_SAFE_INTEGER, -1);
test(macro, Number.MAX_SAFE_INTEGER, 1);

test(macro, Number.NEGATIVE_INFINITY, -1);
test(macro, Number.POSITIVE_INFINITY, 1);

test(macro, Number.MIN_VALUE, 1);
test(macro, Number.MAX_VALUE, 1);

test(macro, Number.EPSILON, 1);
test(macro, Number.NaN, 0);
