import React, { useContext, useState } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';


const Transaction = ({ transaction, id }) => {

    let { removeTransaction, updateTransaction } = useContext(TransactionContext);
    const [editDescription, setDescription] = useState(transaction.description);
    const [editAmount, setAmount] = useState(transaction.amount);
    const [isEdit, setEdit] = useState(false);

    const handleRemove = (id) => {
        removeTransaction({
            id: id
        })
    }

    const handleUpdate = (id) => {
        updateTransaction({
            id: id,
            description: editDescription,
            amount: Number(editAmount)
        })
        setEdit(false);
    }

    const descriptionText = (<input type="text"
        value={editDescription}
        onChange={(e) => setDescription(e.target.value)}
    />);

    const amountText = (<input type="text"
        value={editAmount}
        onChange={(e) => setAmount(e.target.value)}

    />);


    const handleEdit = (id) => {
        setEdit(true)
    }


    return (

        <>
            <span>
                {!isEdit && transaction.description}
                {isEdit && descriptionText}

            </span>
            <span>
                {!isEdit && transaction.amount}
                {isEdit && amountText}
            </span>
            <button onClick={() => { handleRemove(id) }}>X</button>
            {!isEdit ? (<button onClick={() => { handleEdit(id) }}>Edit</button>)
                : (<button onClick={() => { handleUpdate(id) }}>Update</button>)}

        </>

    );
}

export default Transaction;