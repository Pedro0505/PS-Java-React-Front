import React, {useEffect, useState} from 'react';
import AccountsList from '../../components/accountsList/AccountsList';
import getAllAccounts from '../../api/accounts/getAllAccounts';
import './style.css';

function Home() {
  const [accounts, setAccounts] = useState([{id: 1, name: ''}]);

  useEffect(() => {
    (async () => {
      const getAccounts = await getAllAccounts();

      setAccounts(getAccounts);
    })();
  }, []);

  return (
    <div className="home-account-list-container">
      <AccountsList accounts={accounts} />
    </div>
  );
}

export default Home;
