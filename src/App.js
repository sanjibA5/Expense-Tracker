import React,{useState} from 'react';
import './App.css';
// import ExpenseItem from './Component/ExpenseItem';

import NewExpense from './Component/AddingExpense/NewExpense'

import AllExpenses from './Component/AllExpenses'



const DUMMY_DATA = [ //
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2019, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'New Mobile (Wooden)',
    amount: 1000,
    date: new Date(2021, 5, 12),
  },
];



function App() {
  // dummy expense data
  const [expenses,setExpenses]=useState(DUMMY_DATA);
  // end 

const getData=(expenseData)=>{
  // console.log("getting data")
  // console.log(expenseData)
  setExpenses(
    (prevExpenses)=>{
      return [expenseData,...prevExpenses]
    }
  )
}

// console.log(expenses)



  return (
    <div>
      

      <NewExpense geData={getData}/>

      <AllExpenses expenses={expenses} />

      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/> */}
      {/* <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/> */}
      {/* <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[1].date}/> */}
      {/* <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[1].date}/> */}

      {/* {

        expenses.map((el) => {
          
          return <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date} />
        })

      } */}



    </div>
  );
}

export default App;
