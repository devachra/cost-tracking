/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteExpense = () => {
    console.log(props.id);
    props.onDelete(props.id);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <img
            onClick={deleteExpense}
            className="expense-delete"
            src="https://img.icons8.com/fluency/48/000000/filled-trash.png"
          />
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
