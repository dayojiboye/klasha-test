export const formatCurrency = (cash, currency = "₦") => {
	const money = cash
		? Number(cash)
				.toFixed(0)
				.replace(/./g, (c, i, a) => (i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c))
		: "0.00";

	return `${currency}${money}`;
};
