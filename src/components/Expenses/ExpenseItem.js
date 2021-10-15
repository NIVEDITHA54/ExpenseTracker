import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../../context/AppContext";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
      <ExpenseDate date={props.date} />
      {props.name}
      <div>
        <span className="badge rounded-pill bg-danger mr-5 p-2">
          ${props.cost}
        </span>
        <TiDelete size="2em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;
