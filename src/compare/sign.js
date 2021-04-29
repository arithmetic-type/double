/**
 * Computes the sign of the input number.
 *
 * @param {number} v - The number to compute the sign of.
 * @return {number} -1 if v < 0, 1 if v > 0, 0 otherwise.
 */
export const sign = (v) => (v < 0 ? -1 : v > 0 ? 1 : 0);
