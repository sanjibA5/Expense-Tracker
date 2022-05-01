import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import ExpenseAddButton from './ExpenseAddButton';

export default function NewExpense(props) {

  const [clicked, setClicked] = useState(false);

  const saveExpenseDataHandeler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.geData(expenseData)
  }
  const expenseButtonClicked=()=> {
    setClicked(!clicked)
  }
  return (
    <div className='new-expense'>

      <ExpenseAddButton onClicked={expenseButtonClicked} buttonShow={clicked} />

      {
        clicked ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandeler}/> : ''
      }


      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandeler}/> */}
    </div>
  )
}
