import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense, addExpense, removeExpense, editExpense,
   setExpenses, startSetExpenses, startRemoveExpense, startEditExpense
  } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'
const createMockStore = configureStore([thunk]);

const uid = "mytestsuiteid"
const defaultAuthState = {auth: {uid}}
beforeEach((done)=>{
  const expenseData = {};
  expenses.forEach(({id, description, amount, createdAt, text})=>{
    expenseData[id] = {description, amount, createdAt, text}
  })

  database.ref(`users/${uid}/expenses`).set(expenseData).then(()=> done())
})


test('Should setup the edit expense object', ()=>{
  const updates = {
    amount: 23400, 
    description: 'Edited Expense'
  }
  
  const action = editExpense('12345', updates)
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '12345',
    updates
  })
})

test('Should edit expenses from firebase', (done)=>{
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id
  const updates = {
    amount: 23400,
    description: 'Edited Expense'
  }

  return store.dispatch(startEditExpense(id, updates)).then(()=>{
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })

    return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then(snapshot =>{
    expect(snapshot.val().amount).toBe(updates.amount)
    done()
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
  const store = createMockStore(defaultAuthState);

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

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value') // returns a snapshot
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })


});

test('Should add expense with default values to database and store', (done)=>{
  const store = createMockStore(defaultAuthState);

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

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value') // returns a snapshot
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseDefaults)
    done()
  })

});

test('Should setup set expenses action object with data', ()=>{
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
});

test('Should fetch data stored in firebase', (done)=>{
  const store = createMockStore(defaultAuthState)
  
  store.dispatch(startSetExpenses()).then(()=>{
    const actions  = store.getActions();

    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
  done()
})
})

test ('Should setup the remove expense object', ()=>{
  const action = removeExpense({id: '12345'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '12345'
  })
})

test('Should remove items from store and firebase', (done)=>{

  const store = createMockStore(defaultAuthState)
  const id  = expenses[2].id

  store.dispatch(startRemoveExpense({id})).then(()=>{
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      })
      return database.ref(`users/${uid}/expenses/${id}`).once('value')
  }).then(snapshot =>{
    expect(snapshot.val()).toBeFalsy()
    done()
  })

})

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
