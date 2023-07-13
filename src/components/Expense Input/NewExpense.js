import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props)=>{
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
        id: Math.random().toString(),
            ...enteredExpenseData
        };
        props.onAddNewExpense(expenseData);
    };
    return <div className="new-expense">
    <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/> 
    {/* the saveExpenseDataHandler function doesnt call itself on its own so we must implement it such that the function is called */}
    </div>
}

export default NewExpense;