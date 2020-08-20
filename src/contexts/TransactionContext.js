import React, { createContext, useReducer } from 'react';
import TransactionReducer from './TransactionReducer';
import AddTransaction from '../components/AddTransaction';

const initialTransaction = [

    {
        id: 1,
        description: 'Cash',
        amount: 100
    },
    {
        id: 2,
        description: 'Bills',
        amount: 200
    },
]

export const TransactionContext = createContext(initialTransaction);

export const TransactionProvider = ({ children }) => {

    let [state, dispatch] = useReducer(TransactionReducer, initialTransaction);

    function addTransaction(transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                description: transObj.description,
                amount: transObj.amount
            }
        })
    }

    function removeTransaction(transObj) {
        dispatch({
            type: "REMOVE_TRANSACTION",
            id: transObj.id
        })
    }

    return (
        <TransactionContext.Provider value={{
            transaction: state,
            addTransaction,
            removeTransaction
        }}>
            {children}
        </TransactionContext.Provider >
    )
}