import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionList = () => {

    const context = useContext(GlobalContext);
    // we can use destructuring to get the transactions
    const { transactions } = useContext(GlobalContext);

    // here you can see the context in the internal component
    console.log('context: ', context);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/> )}
            </ul>
        </>
    )
}
