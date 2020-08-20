import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';


const Balance = () => {

    let { transaction } = useContext(TransactionContext);
    let amount = transaction.map(transaction => transaction.amount);
    let total = amount.reduce((acc, item) => (acc += item), 0);
    return (
        <div className="current-balance">
            <h2>Current Balance</h2>
            <h2>${total}</h2>
        </div>
    );
}

export default Balance;
