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
                id: transObj.id,
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

    function updateTransaction(transObj) {
        dispatch({
            type: "UPDATE_TRANSACTION",
            id: transObj.id,
            payload: {
                description: transObj.description,
                amount: transObj.amount
            }
        })
    }

    return (
        <TransactionContext.Provider value={{
            transaction: state,
            addTransaction,
            removeTransaction,
            updateTransaction
        }}>
            {children}
        </TransactionContext.Provider >
    )
}