import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    { id: uuidv4(), name: "Shopping", cost: 50, date: new Date(2020, 7, 14) },
    { id: uuidv4(), name: "Holiday", cost: 300, date: new Date(2021, 4, 14) },
    {
      id: uuidv4(),
      name: "Transportation",
      cost: 70,
      date: new Date(2020, 9, 18),
    },
    { id: uuidv4(), name: "Fuel", cost: 40, date: new Date(2021, 9, 10) },
    {
      id: uuidv4(),
      name: "Child Care",
      cost: 500,
      date: new Date(2019, 8, 10),
    },
  ],
};

export const AppContext = createContext();
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
