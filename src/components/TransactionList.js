import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';
import Transaction from './Transaction';

const TransactionList = () => {

    let { transaction } = useContext(TransactionContext);
    console.log(transaction);
    return (<div>
        <h3>Transaction History</h3>
        <div>
            <ul className="transaction-list">
                {transaction.map((transaction) =>
                    <li className={transaction.amount > 0 ? 'border-income' : 'border-expense'}>
                        <Transaction transaction={transaction} id={transaction.id} />
                    </li>
                )}
            </ul>
        </div>
    </div>);
}

export default TransactionList;