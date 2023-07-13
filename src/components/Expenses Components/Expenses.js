import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Card from "./Card";
import ExpensesFilter from "../Expenses Filter/ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [chosenYear, selectYear] = useState("2020");
  const yearChangeHandler = (selectedYear) => {
    selectYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === chosenYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={yearChangeHandler}
          selected={chosenYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {/* reach out to array and for every element in it make a jsx element, the following code basically transforms our array to an array full of jsx items */}
        <ExpenseList items={filteredExpenses}/>
        </Card>
    </div>
  );
}

export default Expenses;
