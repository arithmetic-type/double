export const absapprox = (epsilon) => (a, b) => {
	const r = a - b;
	return r < -epsilon ? -1 : r > epsilon ? 1 : 0;
};
