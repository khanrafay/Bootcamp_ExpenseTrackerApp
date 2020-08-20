const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION": {
            return [action.payload, ...state];
        }
        case "REMOVE_TRANSACTION": {
            let copyState = state;
            copyState.splice(action.id, 1)
            console.log(copyState);
            return [...copyState];
        }
        case "EDIT_TRANSACTION": {
            let copyState = state;
            
        }
        default:
            return state;
    }
})

export default TransactionReducer;