import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter/ExpenseFilter'

import Card from './Card'
import './AllExpenses.css';
import ExpensesChart from './ExpensesChart';

export default function AllExpenses(props) {
    const [selectdata, setSelectdata] = useState('')
    // console.log(props.expenses[0].date)

    const filterchangeHandaler = (date_from_expensefilter) => {
        // this function will call when user filter out the date

        // console.log(date_from_expensefilter)
        setSelectdata(date_from_expensefilter)

    }
   
    let exenseFilter=props.expenses.filter((element)=>{
        
        return element.date.getFullYear().toString()===selectdata
    })
    if (selectdata==='') {

        exenseFilter=props.expenses
    }

    return (
        <>
            <Card className='expenses'>
                <ExpenseFilter date={selectdata} onChangeFilter={filterchangeHandaler} />

                {
                    // show the chart only is a user select a perticulat years
                    selectdata===''?'':
                    <ExpensesChart expense={exenseFilter} />
                }
                {
                    exenseFilter.length===0?(<p>No Data found</p>):(

                    exenseFilter.map((el) => {

                        return <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date} />
                    })
                    )


                }
            </Card>
        </>

    )
}
