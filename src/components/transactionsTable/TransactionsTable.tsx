import React, {useContext, useEffect} from 'react';
import {TransactionsContext} from '../../context/TransactionsContext';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import dayjs from 'dayjs';

function TransactionsTable() {
  const {fetchTransactions, transactions} = useContext(TransactionsContext);

  useEffect(() => {
    (async () => {
      await fetchTransactions('');
    })();
  }, []);

  const columns: GridColDef[] = [
    {
      field: 'transferDate',
      headerName: 'Dados',
      width: 200,
      valueFormatter: param => {
        return dayjs(param.value).format('YYYY-MM-DD');
      },
    },
    {
      field: 'value',
      headerName: 'Valencia',
      width: 200,
      type: 'string',
      valueFormatter: param => {
        return `R$ ${String(param.value)}`;
      },
    },
    {field: 'type', headerName: 'Tipo', width: 200},
    {
      field: 'transactionOperatorName',
      headerName: 'Nome do operador transacionado',
      width: 250,
    },
  ];

  return (
    <div style={{height: 400, width: '60%'}}>
      <DataGrid
        rows={transactions}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {page: 0, pageSize: 5},
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}

export default TransactionsTable;
