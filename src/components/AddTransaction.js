import React, { useState, useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

const AddTransaction = () => {

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState();
    const [isIncome, setIncome] = useState("Income");
    // const [isExpense, setExpense] = useState("Expense");

    const { transaction, addTransaction } = useContext(TransactionContext);

    let transactionValue = isIncome === 'Income' ? Number(amount) : Number(-amount)
    

    const handleAddition = (e) => {
        e.preventDefault();
        setDescription("");
        setAmount("");
        addTransaction({
            description: description,
            amount: transactionValue
        })

    }

    return (<div>
        <h3>Add New Transaction</h3>
        <form className="transaction-form" onSubmit={handleAddition}>
            <label>Income
                <input type="radio"
                    name="transaction"
                    checked={isIncome === 'Income'}
                    onClick={() => { setIncome('Income') }}
                    value="Income"
                />
            </label>
            <label>Expense
                <input type="radio"
                    name="transaction"
                    checked={isIncome === 'Expense'}
                    onClick={() => { setIncome('Expense') }}
                    value="Expense"
                />
            </label>
            <br />
            <br />
            <label>Description</label>
            <div>
                <input type="text"
                    placeholder="Enter description"
                    onChange={(e) => { setDescription(e.target.value) }}
                    value={description}
                    required />
            </div>
            <label>Amount</label>
            <div>
                <input type="text"
                    placeholder="Enter amount"
                    onChange={(e) => { setAmount(e.target.value) }}
                    value={amount}
                    required />
            </div>
            <div className="btnAdd">
                <button>Add Transaction</button>
            </div>
        </form>
    </div>);
}

export default AddTransaction;