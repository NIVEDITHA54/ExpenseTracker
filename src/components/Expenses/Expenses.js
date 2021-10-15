import React, { useContext, useState, useEffect } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpenseList";
import { AppContext } from "../../context/AppContext";

const Expenses = () => {
  const { expenses } = useContext(AppContext);
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setfilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setfilteredExpenses(searchResults);
  };

  const dropdownChangeHandler = (event) => {
    setFilteredYear(event.target.value);
    const filteredExpenses = expenses.filter((filteredExpense) => {
      return (
        filteredExpense.date.getFullYear().toString() === event.target.value
      );
    });

    setfilteredExpenses(filteredExpenses);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <label>Filter by year</label>
          <select
            className="form-control"
            value={filteredYear}
            onChange={dropdownChangeHandler}
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control mb-2 mt-4"
            placeholder="Type Expense name to search..."
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <div className="col-sm p-5">
            <ExpensesChart expenses={filteredExpenses} />
          </div>
        </div>

        <ExpenseList expenses={filteredExpenses} />
      </div>
    </>
  );
};

export default Expenses;
