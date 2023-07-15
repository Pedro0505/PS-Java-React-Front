import React, {useContext, useEffect} from 'react';
import {TransactionsContext} from '../../context/TransactionsContext';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import dayjs from 'dayjs';
import './style.css';

function TransactionsTable() {
  const {fetchAllTransactions, transactions, periodBalance, totalBalance} =
    useContext(TransactionsContext);

  useEffect(() => {
    (async () => {
      await fetchAllTransactions('');
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
    <>
      <div className="balance-container">
        <p className="total-balance-text">{`Saldo total: R$ ${totalBalance}`}</p>
        <p className="period-balance-text">{`Saldo no período: R$ ${periodBalance}`}</p>
      </div>
      <div style={{height: 400, width: '60%'}} className="table-container">
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
    </>
  );
}

export default TransactionsTable;
