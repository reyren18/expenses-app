import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
const ExpenseList = (props)=>{
    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>No items found</h2>
    }
    return(
        <ul className='expenses-list'>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id} //added so that react does not have to look through the whole array to find where to insert the element
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    )
}

export default ExpenseList;