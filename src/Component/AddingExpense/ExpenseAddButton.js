import React from 'react'


export default function ExpenseAddButton(props) {
  return (
    <div>
      <button onClick={props.onClicked}>{
        props.buttonShow? <span>Cancel</span>: <span>Add Expense</span>
      }</button>
      
    </div>
  )
}
