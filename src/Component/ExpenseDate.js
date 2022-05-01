import React from 'react'
import './ExpenseDate.css'

export default function ExpenseDate(props) {

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const date = props.date.toLocaleString('en-US', { day: 'numeric' });
    const year = props.date.toLocaleString('en-US', { year: 'numeric' });

    return (
        <div className='expense-date'>
        <div className='expense-date__date'>{date}</div>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
    </div>
    )
}
