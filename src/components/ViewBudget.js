import React from "react";

const ViewBudget = (props) => {
  return (
    <>
      <span className="fw-bold">Budget: £{props.budget}</span>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
