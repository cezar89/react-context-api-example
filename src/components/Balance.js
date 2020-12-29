import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    // using destructuring
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    console.log('amounts', amounts)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    console.log('total', total)
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}
