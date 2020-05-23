import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';



test('should set up the tthe expenses reducer with default values ', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([])
})


// Add expense 

test('Should add a new expense object to the existing array', ()=>{
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'Breakfast',
      text: 'Beacon',
      amount: 13000,
      createdAt: moment(40)
    }
  }
  const state = expensesReducer(expenses, action);
  // expect(state[3].id).toBe(action.expense.id) Either will work
  expect(state).toEqual([...expenses, action.expense])

})

// Remove Expense 

test('Should remove an expense from the existing expenses array', ()=>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1], expenses[2]])

})



test('Shouldnt remove an expense if id doesnt match', ()=>{
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '7'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)

})

// Edit Expense 

test('Should edit an existing expense', ()=> {
  
  const amount = 150000 
  const action = {
    type:'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  }

  const state = expensesReducer(expenses, action)
  expect(state[1].amount).toBe(amount)

})

test('Shouldnt  edit an existing expense if id doesnt match', ()=> {
  
  const amount = 130000
  const action = {
    type:'EDIT_EXPENSE',
    id: '7',
    updates: {
      amount
    }
  } 
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)

})

test('Should setup state with new expenses from the setExpenses', ()=>{
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[2]]
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[2]])

})