import Transaction from "../components/Transaction";

const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION": {
            return [...state, action.payload];

        }
        case "REMOVE_TRANSACTION": {
            let copyState = state;
            copyState.splice(action.id - 1, 1)
            return [...copyState];
        }
        case "UPDATE_TRANSACTION": {
            let copyState = state
            let check = copyState.splice(action.id - 1, 1, action.payload);

            return [...copyState]


        }
        default:
            return state;
    }
})

export default TransactionReducer;