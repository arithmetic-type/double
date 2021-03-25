export function idivmod(a, b) {
	const q = (a / b) | 0;

	return [q, (a %= b)];
}
