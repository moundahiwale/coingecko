const currencyNumberFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
});

export default currencyNumberFormatter;
