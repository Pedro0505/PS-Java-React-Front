import React from 'react';
import Header from '../../components/header/Header';
import SearchForm from '../../components/searchForm/SearchForm';
import TransactionsTable from '../../components/transactionsTable/TransactionsTable';

function Main() {
  return (
    <>
      <Header />
      <SearchForm />
      <TransactionsTable />
    </>
  );
}

export default Main;
