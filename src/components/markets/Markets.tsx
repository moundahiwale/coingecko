import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import IMarket from '../../interfaces/IMarket';
import { fetchMarkets } from '../../services/coins-service';
import { formatNumberToTwoDecimalPlaces } from '../../utils/grid-number-formatter';

const columns: GridColDef[] = [
  { field: 'image', headerName: 'Image' },
  {
    field: 'name',
    headerName: 'Name',
  },
  {
    field: 'symbol',
    headerName: 'Symbol',
  },
  {
    field: 'current_price',
    headerName: 'Current Price',
    type: 'number',
    valueFormatter: formatNumberToTwoDecimalPlaces,
  },
  {
    field: 'high_24h',
    headerName: 'High 24 hour Price',
    type: 'number',
    valueFormatter: formatNumberToTwoDecimalPlaces,
  },
  {
    field: 'low_24h',
    headerName: 'Low 24 hour Price',
    type: 'number',
    valueFormatter: formatNumberToTwoDecimalPlaces,
  },
];

const Markets = () => {
  const [markets, setMarkets] = useState<IMarket[]>([]);

  useEffect(() => {
    const getMarkets = async () => {
      const markets = await fetchMarkets();
      setMarkets(markets);
    };
    getMarkets();
  }, []);

  return (
    <>
      {markets ? (
        <Box sx={{ width: '100%' }}>
          <DataGrid
            autoHeight
            rows={markets}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Box>
      ) : (
        'Error retrieving markets'
      )}
    </>
  );
};

export default Markets;
