import React, { useState } from "react";
import useBudgetStore from "../store";
import './budgetTracker.css';


const BudgetTracker = () => {

  const changeBudgetTotalHandler = useBudgetStore((state) => state.changeBudgetTotal);
  const prevTotalBudget = useBudgetStore((state) => state.budgetTotal);
  function budgetSubmit() {
    let budget = prompt("Enter your monthly expense limit", prevTotalBudget);
    console.log(budget);
    if (!budget || budget < 0) {
      alert("Input cannot be empty or negative");
      budgetSubmit();
    }
    changeBudgetTotalHandler(budget);
  }

  const [expense, setExpense] = useState(0);
  const [expenseDesc, setExpenseDesc] = useState('');
  const addExpenseHandler = useBudgetStore((state) => state.addExpense);
  const addExpenseListHandler = useBudgetStore((state) => state.addExpenseToList);
  const expensesList = useBudgetStore((state) => state.expensesList);

  function addExpense() {
    if (!expense || expense < 0) {
      alert("Input cannot be empty or negative");
      return;
    }
    addExpenseHandler(expense);
    addExpenseListHandler({
      expenseDesc,
      expense
    })
  }

  return (
    <div>
      <button onClick={budgetSubmit}>Enter your monthly budget</button>

      <div>
        <form className="expense-container" onSubmit={addExpense}>
          <textarea rows={5} type="text" className="exp-desc" placeholder="Expense Desc" onChange={(e) => setExpenseDesc(e.target.value)} />
          <input type="number" className="exp-amount" placeholder="Add expense amount" onChange={(e) => setExpense(e.target.value)} />
          <button type="submit" className="submit">Add Expense</button>
        </form>

        <div className="expensesList">
          {console.log(expensesList)};
        </div>
      </div>
    </div>
  );
}

export default BudgetTracker;
