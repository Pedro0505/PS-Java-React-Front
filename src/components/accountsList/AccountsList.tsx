import React from 'react';
import {Link} from 'react-router-dom';
import IAccounts from '../../interfaces/IAccounts';
import './style.css';

interface AccountsListProps {
  accounts: IAccounts[];
}

function AccountsList({accounts}: AccountsListProps) {
  return (
    <main className="account-list-container">
      <div className="account-list-name-container">
        {accounts.map(e => (
          <Link
            to={`/transactions/${e.id}`}
            key={e.id}
            className="account-list-row">
            <p className="account-list-name">{e.name}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default AccountsList;
