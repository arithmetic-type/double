export const relapprox = (epsilon) => (a, b) => {
	if (b === 0) {
		return a;
	}

	if (a === 0) {
		return -b;
	}

	const r = a / b - 1;

	return r < -epsilon ? -1 : r > epsilon ? 1 : 0;
};
