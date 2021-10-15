import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = (props) => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
      date: new Date(date),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
    setDate("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <div className="card text-dark bg-light mb-3">
            <div className="card-body p-5">
              <h2>Add Expense</h2>
              <div className="row mt-5">
                <div className="col-sm">
                  <label htmlFor="name" className="fw-bold">
                    Name
                  </label>
                  <input
                    required="required"
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="col-sm">
                  <label htmlFor="cost" className="fw-bold">
                    Cost
                  </label>
                  <input
                    required="required"
                    type="number"
                    className="form-control"
                    id="cost"
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}
                  />
                </div>
                <div className="col-sm">
                  <label htmlFor="date" className="fw-bold">
                    Date
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    min="2019-01-01"
                    max="2022-12-31"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  />
                </div>
              </div>
              <div className="d-grid gap-2 col-4 mx-auto mt-5">
                <button type="submit" className="btn btn-secondary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
