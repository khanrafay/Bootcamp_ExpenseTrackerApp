import React, { useContext, useState } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';


const Transaction = ({ transaction, id }) => {

    let { removeTransaction } = useContext(TransactionContext);
    const [editDescription, setDescription] = useState("");
    const [editAmount, setAmount] = useState(0);
    const [isEdit, setEdit] = useState(false);

    const handleRemove = (id) => {
        removeTransaction({
            id: id
        })
    }

    const descriptionText = (<input type="text"
        value={transaction.description}
        onChange={(e) => setDescription(e.target.value)}
    />);

    const amountText = (<input type="text"
        value={transaction.amount}
        onChange={(e) => setAmount(e.target.value)}

    />);


    const handleEdit = (id) => {
        setEdit(true)
    }

    const handleUpdate = (id) => {
        setEdit(false);
    }
    return (

        <li >
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

        </li>

    );
}

export default Transaction;