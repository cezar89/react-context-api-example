import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = (props) => {
    const{deleteTransaction} = useContext(GlobalContext);

    // or we could have used destructuring in the props ({transaction})
    const transaction = props.transaction;
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button
                className="delete-btn"
                onClick={( () => deleteTransaction(transaction.id) )}
            >x</button>
        </li>
    )
}
