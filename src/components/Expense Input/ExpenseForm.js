import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props)=>{
    const [enteredTitle, setNewTitle] = useState(''); //creating a usestate for the new title we are entering 
        const titleChange = (event)=>{
        setNewTitle(event.target.value);
    }

    const [enteredAmount, setNewAmount] = useState(''); 
    const amountChange = (event)=>{
    setNewAmount(event.target.value);
}

    const [enteredDate, setNewDate] = useState(''); 
        const dateChange = (event)=>{
        setNewDate(event.target.value);
    }

const submitHandler = (event)=>{
    event.preventDefault();
    const newExpenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate)
    };
    props.onSaveExpenseData(newExpenseData);
    setNewTitle('');
    setNewAmount('');
    setNewDate('');
}
    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChange} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChange}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChange}/>
            </div>
        </div>
        <div className='new-expense__controls'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;