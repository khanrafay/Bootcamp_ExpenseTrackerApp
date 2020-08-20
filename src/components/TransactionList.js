import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';
import Transaction from './Transaction';

const TransactionList = () => {

    let { transaction } = useContext(TransactionContext);
    console.log(transaction);
    return (<div>
        <h3>Transaction History</h3>
        <ul className="transaction-list">
            {transaction.map((transaction, index) =>

                <Transaction transaction={transaction} id={index} />

            )}
        </ul>
    </div>);
}

export default TransactionList;