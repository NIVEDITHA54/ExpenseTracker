import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import Expenses from "./components/Expenses/Expenses";
import AddExpenseForm from "./components/AddExpenseForm";
import RemainingBudget from "./components/Remaining";

const App = () => {
  return (
    <AppProvider>
      <div className="text-center bg-dark bg-gradient text-white">
        <h1 className="p-5">Expense Tracker</h1>
        <div className="row p-5">
          <div className="col-sm">
            <Budget />
          </div>

          <div className="col-sm">
            <RemainingBudget />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-sm-8">
            <Expenses />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
