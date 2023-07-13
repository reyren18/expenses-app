import { useState } from "react";
import "./App.css";
import NewExpense from "./components/Expense Input/NewExpense";
import Expenses from "./components/Expenses Components/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);
  // We use the prevExpense as a snapshot of all previous expenses and then spread it over the expenses array along with our new expense
  const addExpenseHandler = (expense)=> {
    setExpense((prevExpense)=>{
       return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddNewExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
