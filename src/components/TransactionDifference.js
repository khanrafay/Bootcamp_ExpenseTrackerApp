import React, { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

const TransactionDifference = () => {

    const { transaction } = useContext(TransactionContext);
    

    const getIncome = () => {
        let income = 0;

        for (var i = 0; i < transaction.length; i++) {
            income += transaction[i].amount > 0 ? transaction[i].amount : 0;
        }

        return income;
    }

    const getExpense = () => {
        let expense = 0;

        for (var i = 0; i < transaction.length; i++) {
            expense += transaction[i].amount < 0 ? transaction[i].amount : 0;
        }

        return expense;
    }
    
    return (
        <div className="transaction-difference">
            <span>
                <h4>Income</h4>
                <h5>${getIncome()}</h5>
            </span>

            <span>
                <h4>Expense</h4>
                <h5>${getExpense()}</h5>
            </span>
        </div>
    );
}

export default TransactionDifference;