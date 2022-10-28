export const macro = (t, expected, f, ...args) => {
	t.is(f(...args), expected);
};

macro.title = (title, expected, f, ...args) =>
	title ?? `${f.name}(${args.join(', ')}) is ${JSON.stringify(expected)}`;

const throws = (t, expected, f, ...args) => {
	t.throws(() => f(...args), expected);
};

throws.title = (title, expected, f, ...args) => {
	return (
		title ?? `${f.name}(${args.join(', ')}) throws ${JSON.stringify(expected)}`
	);
};
