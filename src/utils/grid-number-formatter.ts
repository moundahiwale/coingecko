import { GridValueFormatterParams } from '@mui/x-data-grid';

const formatNumberToTwoDecimalPlaces = (
  params: GridValueFormatterParams<number>
) => {
  if (params.value == null) {
    return '';
  }

  const valueFormatted = params.value.toFixed(2);
  return `€${valueFormatted}`;
};

export { formatNumberToTwoDecimalPlaces };
