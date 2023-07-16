import React from 'react';
import {useParams} from 'react-router-dom';
import SearchForm from '../../components/searchForm/SearchForm';
import TransactionsTable from '../../components/transactionsTable/TransactionsTable';

function Transactions() {
  const params = useParams<{accountId: string}>();

  return (
    <>
      <SearchForm accountId={params.accountId} />
      <TransactionsTable accountId={params.accountId} />
    </>
  );
}

export default Transactions;
