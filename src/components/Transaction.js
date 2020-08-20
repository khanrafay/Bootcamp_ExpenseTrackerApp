import React, { useContext } from 'react';
import {TransactionContext} from '../contexts/TransactionContext';


const Transaction = ({ transaction, id }) => {

    let { removeTransaction } = useContext(TransactionContext);
    const handleRemove = (id) => {
        removeTransaction({
            id: id
        })
    }
    return (

        <li >
            <span>
                {transaction.description}
            </span>
            <span>
                {transaction.amount}
            </span>
            <button onClick={() => { handleRemove(id) }}>X</button>
        </li>

    );
}

export default Transaction;