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

const _names = new Map([
	[eq0, 'eq0'],
	[eq1, 'eq1'],
	[eq_1, 'eq_1'],
	[le0, 'le0'],
	[lt0, 'lt0'],
	[ge0, 'ge0'],
	[gt0, 'gt0'],
	[le1, 'le1'],
	[lt1, 'lt1'],
	[ge1, 'ge1'],
	[gt1, 'gt1'],
	[ge, 'ge'],
	[lt, 'lt'],
	[le, 'le'],
	[gt, 'gt'],
	[eq, 'eq'],
	[ne, 'ne'],
]);

const name = (f) => _names.get(f) ?? f.name;

export const macro = (t, expected, f, ...args) => {
	t.is(f(...args), expected);
};

macro.title = (title, expected, f, ...args) =>
	title ?? `${name(f)}(${args.join(', ')}) is ${JSON.stringify(expected)}`;

const throws = (t, expected, f, ...args) => {
	t.throws(() => f(...args), expected);
};

throws.title = (title, expected, f, ...args) => {
	return (
		title ?? `${name(f)}(${args.join(', ')}) throws ${JSON.stringify(expected)}`
	);
};
