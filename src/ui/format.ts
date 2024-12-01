/**
 * Formats a number by adding thousand separators (commas)
 * @param num The number to format
 * @throws {TypeError} When input is not a valid number
 * @example
 * formatNumber(1234567) // returns "1,234,567"
 * formatNumber(1000) // returns "1,000"
 */
export function formatNumber(num: number): string {
	if (typeof num !== 'number' || Number.isNaN(num)) {
		throw new TypeError('Input must be a valid number')
	}

	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
