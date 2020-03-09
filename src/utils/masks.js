export const currency = {
	mask(value) {
		if (value === '') {
			return value;
		}
		return parseFloat(value)
			.toFixed(2)
			.replace('.', ',')
			.replace(/\d(?=(\d{3})+,)/g, '$&.');
	},
};
