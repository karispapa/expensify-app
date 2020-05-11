import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

// Tests for  the action generators for  the expense reducer 

test ('Should setup the remove expense object', ()=>{
  const action = removeExpense({id: '12345'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '12345'
  })
})

test('Should setup the edit expense object', ()=>{
  const action = editExpense('12345', {amount: 23400, description: 'Edited Expense'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '12345',
    updates: {
      amount: 23400,
      description: 'Edited Expense'
    }
  })
})

test('Should setup a new expense object from the values passed', ()=>{
  const expenseData = {
    description: 'Rent',
    text: 'For the month of March',
    amount: 239000,
    createdAt: 100000
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense:{
      id: expect.any(String),
      ...expenseData
    }
  })
})

test('Should setup a new expense object with default values', ()=>{
 
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense:{
      id: expect.any(String),
      description: '',
      text: '',
      amount: 0,
      createdAt: 0
    }
  })
})
