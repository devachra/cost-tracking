import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const items = JSON.parse(localStorage.getItem("list"));
  let newItems;
  if (items && items.length !== 0) {
    newItems = items.map((item) => {
      return {
        ...item,
        date: new Date(item.date),
      };
    });
  } else {
    newItems = [];
  }

  const removeExpenseFromExpenses = (expense_id) => {
    const expensesAfterDelete = expenses.filter(
      (expense) => expense.id !== expense_id
    );
    setExpenses(expensesAfterDelete);
  };

  const [expenses, setExpenses] = useState(newItems);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  localStorage.setItem("list", JSON.stringify(expenses));

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDelete={removeExpenseFromExpenses} />
    </div>
  );
};

export default App;
