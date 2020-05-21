import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, removeExpense, editExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'
const createMockStore = configureStore([thunk]);

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
  const expenseData = expenses[2]
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense:expenses[2]
  })
});

test('Should add expense to database and store', (done)=>{
  const store = createMockStore({});

  const expenseData = {
    description: 'coffee',
    text: 'Black coffee',
    amount: 30000,
    createdAt: 2000
  }

  store.dispatch(startAddExpense(expenseData))
  .then(()=>{
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value') // returns a snapshot
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })


});

test('Should add expense with default values to database and store', (done)=>{
  const store = createMockStore({});

  const expenseDefaults = {
    description: '',
    text: '',
    amount: 0,
    createdAt: 0
  }

  store.dispatch(startAddExpense({}))
  .then(()=>{
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value') // returns a snapshot
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseDefaults)
    done()
  })

});



// test('Should setup a new expense object with default values', ()=>{
 
//   const action = addExpense()
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense:{
//       id: expect.any(String),
//       description: '',
//       text: '',
//       amount: 0,
//       createdAt: 0
//     }
//   })
// })
