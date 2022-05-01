import React, { useState } from 'react'

import './ExpenseForm.css';

export default function ExpenseForm(props) {
    // console.log(props)

    const [title, settitle] = useState('');
    const [amount, setamount] = useState('');
    const [date, setdate] = useState('');

    const titleChangeHandaler = (event) => {

        settitle(event.target.value)
    }
    const amountChangeHandaler = (event) => {

        setamount(event.target.value)
    }
    const dateChangeHandaler = (event) => {

        setdate(event.target.value)
    }

    const fomSubmitHandaler = (e) => {
        // form submit
        e.preventDefault();
        const expenseData = {
            title,
            amount: parseFloat(amount),
            date: new Date(date)
        }
        // console.log(expenseData)
        props.onSaveExpenseData(expenseData)
        settitle('')
        setamount('')
        setdate('')

    }

    return (
        <form onSubmit={fomSubmitHandaler}>
            <div className='new-expense__controls'>

                <div className="new-expense__control">
                    <label >Title</label>
                    <input type="text" value={title} onChange={titleChangeHandaler} />
                </div>

                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandaler} />
                </div>

                <div className="new-expense__control">
                    <label >Date</label>
                    <input type="date" min="2019-01-01" max="2022-10-31" value={date} onChange={dateChangeHandaler} />
                </div>

                <div className='new-expense__actions'>
                    <button type='submit'>Add</button>
                </div>

            </div>
        </form>
    )
}
