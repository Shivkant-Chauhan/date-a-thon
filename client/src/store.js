import create from 'zustand';

import {devtools, persist} from 'zustand/middleware'

const budgetStore = (set) => ({
    budgetTotal: 10000,
    changeBudgetTotal: (newBudget) => {
      set((state) => ({
        budgetTotal: newBudget
      }))
    },
    expenses: 0,
    addExpense: (expense) => {
      set((state) => ({
        expenses: state.expenses + expense
      }))
    },
    expensesList: [],
    addExpenseToList: (expenseItem) => {
      set((state) => ({
        expensesList: [...state.expensesList, expenseItem]
      }))
    }
})

const useBudgetStore = create(
    devtools(
        persist(budgetStore, {
            name: "budget",
        })
    )
)


export default useBudgetStore;
