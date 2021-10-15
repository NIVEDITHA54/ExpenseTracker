import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="list-group mb-3">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          name={expense.name}
          cost={expense.cost}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
