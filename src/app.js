import React from 'react'; 
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// import {addExpense} from './actions/expenses';
// import {addTextFilter} from './actions/filters'
// import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

// store.dispatch(addExpense({description: 'Rent', text: 'Rent', amount: 12000}))
// store.dispatch(addExpense({description: 'Power Bill', text: 'Power', amount: 20000}))
// store.dispatch(addExpense({description: 'Water Bill', text: 'Water', amount: 15000}))

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(state.expenses);



const jsx = (
  <Provider store={store}>

    <AppRouter/>

  </Provider>
) ;

ReactDOM.render(jsx, document.getElementById('app'));

