import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
// import selectExpenses from '../../selectors/expenses'
import calculateTotals from '../../selectors/expensesTotal'

let expenseCount, expenseTotal, expensesArray, wrapper

beforeEach(()=>{
  expenseCount = expenses.length
  expenseTotal = calculateTotals(expenses);  

  wrapper = shallow(<ExpenseSummary  
    expenseCount={expenseCount}
    expenseTotal={expenseTotal}
    />)
})

test('Render Expense Summary correctly', ()=>{
  expect(wrapper).toMatchSnapshot()
});

test('Render Expense Summary with one expense', ()=>{
  const newExpenses = [expenses[1]]
  wrapper.setProps({
    expenseCount: newExpenses.length,
    expenseTotal: calculateTotals(newExpenses)
  })
  expect(wrapper).toMatchSnapshot()
});

test('Render Expense Summary with no expenses', ()=>{
  const newExpenses = []
  wrapper.setProps({
    expenseCount: newExpenses.length,
    expenseTotal: calculateTotals(newExpenses)
  })
  expect(wrapper).toMatchSnapshot()
});