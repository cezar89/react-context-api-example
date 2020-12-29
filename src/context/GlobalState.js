import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

    // Create context 
export const GlobalContext = createContext(initialState);

    // Provider component to wrap other components that will access this state
export const GlobalProvider = ({children}) => {
        // whenever we want to call a reducer action we have to call this reducer method
        // AppReducer is wherever we hold our reducer
    const [state, dispatch] = useReducer(AppReducer, initialState)


    // here we are going to add our actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

        // the Provider provides the state and the actions to modify the state
        // the children is whatever we wrap, to make available the Context state
    return (<GlobalContext.Provider value={{
            // this way we can access the transactions state from any component that useContext() hook!!!
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}