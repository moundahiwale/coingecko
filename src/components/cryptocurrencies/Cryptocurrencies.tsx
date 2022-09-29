import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { DataGrid, GridColumns, GridEventListener } from '@mui/x-data-grid';
import { useCallback, useEffect, useState } from 'react';
import ICryptocurrency from '../../interfaces/ICryptocurrency';
import { fetchMarkets } from '../../services/coins-service';
import { formatNumberToTwoDecimalPlaces } from '../../utils/grid-number-formatter';
import { useNavigate } from 'react-router-dom';

const columns: GridColumns = [
  {
    field: 'image',
    headerName: 'Logo',
    width: 60,
    renderCell: (params) => {
      return (
        <>
          <Avatar src={params.value} />
        </>
      );
    },
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'symbol',
    headerName: 'Symbol',
    width: 70,
  },
  {
    field: 'current_price',
    headerName: 'Current Price',
    width: 150,
    type: 'number',
    valueFormatter: formatNumberToTwoDecimalPlaces,
  },
  {
    field: 'high_24h',
    headerName: 'High 24 hour Price',
    width: 150,
    type: 'number',
    valueFormatter: formatNumberToTwoDecimalPlaces,
  },
  {
    field: 'low_24h',
    headerName: 'Low 24 hour Price',
    width: 150,
    type: 'number',
    valueFormatter: formatNumberToTwoDecimalPlaces,
  },
];

const Cryptocurrencies = () => {
  const [markets, setMarkets] = useState<ICryptocurrency[]>([]);

  useEffect(() => {
    const getMarkets = async () => {
      const markets = await fetchMarkets();
      setMarkets(markets);
    };
    getMarkets();
  }, []);

  const navigate = useNavigate();
  const handleRowClick: GridEventListener<'rowClick'> = useCallback(
    (params) => navigate(`coins/${params.row.id}`),
    [navigate]
  );

  return (
    <>
      {markets ? (
        <Box
          sx={{
            width: '65%',
            // center the table
            marginLeft: 'auto',
            marginRight: 'auto',
            // center the table
          }}
        >
          <DataGrid
            autoHeight
            rows={markets}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            sx={{
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
            }}
            onRowClick={handleRowClick}
          />
        </Box>
      ) : (
        'Error retrieving markets'
      )}
    </>
  );
};

export default Cryptocurrencies;
