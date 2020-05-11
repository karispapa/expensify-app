/* create a redux store to hold expenses and filters 
expenses is an array of objects with each object holding a single expense
filters is a single object to holf text and amount sort parameters and date filters 

action generators: 

  - ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE
  - SET_START_DATE, SET_END_DATE, SORT_BY_DATE, SORT_BY_AMOUNT

  dispatch actions to mutate the state of the store 
  create two reducer functions for expenses and filters  
  create a sigle store and use the combineReducers method 

  create a filter function to return the store state based on the values in the filters 

  test that all code is doing its work 

*/

import { createStore, combineReducers } from "redux";
import uuid from 'uuid'

// add Expense 
const addExpense = (
  {
    text = '',
    description = '',
    createdAt = 0,
    amount = 0
  }={}
)=>({
  type: 'ADD_EXPENSE',
  expense: {
  id: uuid(),
  text,
  description,
  amount,
  createdAt,
  }
});

// Remove expense

const removeExpense = ({id}={})=>({
  type: 'REMOVE_EXPENSE',
  id
});

// edit expesnse 
const editExpense = (id, updates)=>({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// set text filter
const addTextFilter = (text = '')=>({
  type: 'ADD_TEXT_FILTER',
  text
});

// filter by amount 
const sortByAmount = ()=>({
  type: 'SORT_BY_AMOUNT',
});

// filter by date
const sortByDate = ()=>({
  type: 'SORT_BY_DATE',
});

// setStartDate
const setStartDate = (startDate)=>({
  type: 'SET_START_DATE',
  startDate
})

// setEndDate
const setEndDate = (endDate)=>({
  type: 'SET_END_DATE',
  endDate
});



const expensesDefaultState = [];

const expenseReducer = (state = expensesDefaultState, action)=>{

  switch(action.type){
    case 'ADD_EXPENSE':
      return [
        ...state, 
        action.expense
      ]
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          }
        }else{
          return expense
        }
      });

      case 'REMOVE_EXPENSE':
        return state.filter(({id})=> action.id !== id);

    default: 
      return state
  }
};

const filterDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filterDefaultState, action)=>{
  switch(action.type){
    case 'ADD_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };

    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case  'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case  'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default: 
      return state
  }
};


const store  = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
  );

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate})=>{
  return expenses.filter((expense)=>{
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch  = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b)=>{
    if(sortBy === 'date'){
      return a.createdAt > b.createdAt ? -1: 1;
    }else if(sortBy === 'amount'){
      return a.amount > b.amount ? -1 : 1;
    };
  });
};

 store.subscribe(()=> {
   const state = store.getState();
   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
   console.log(visibleExpenses);
 });


const expense1 = store.dispatch(addExpense({description: 'rent', text: 'rent', amount: 3000, createdAt: -1000}))
const expense2 = store.dispatch(addExpense({description: 'lunch', text: 'lunch', amount: 5000, createdAt: 2000}))
const expense3 = store.dispatch(addExpense({description: 'travel', text: 'travel', amount: 8000, createdAt: 7000}))


store.dispatch(editExpense(expense1.expense.id, {amount: 3300}));
// store.dispatch(removeExpense({id: expense2.expense.id}));
// store.dispatch(addTextFilter('rent'));
// store.dispatch(addTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(1000));
// store.dispatch(setEndDate(5000));
 















































































// import {createStore} from 'redux'

// // Create action generator // action generators are functions that return action objects
// const incrementCount  = ({incrementBy = 1}={})=> ({
//   type: 'INCREMENT',
//   incrementBy

// });

// const countReducer = ((state = {count: 0}, action)=> {

//     switch(action.type){

//       case 'INCREMENT':
//         return {
//           count: state.count + action.incrementBy
//         }
//       default: 
//           return state
//     }
// });

// let store = createStore(countReducer);
// store.subscribe (()=> {
//   console.log(store.getState())
// })

// store.dispatch(incrementCount({incrementBy: 10}))