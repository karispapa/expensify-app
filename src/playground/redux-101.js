import {createStore} from 'redux';

// action generators are functions that return action objects 

// action generator for increment count 
const IncrementCount = ({incrementBy = 1} = {})=> ({
  type: 'INCREMENT',
  incrementBy //: typeof incrementBy === 'number' ? incrementBy : 1  - After object destructuring 
});

const decrementCount = ({decrementBy = 1} = {})=> ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({count})=> ({
  type: 'SET',
  count
});

const resetCount = ()=> ({
  type: 'RESET',
  count: 0
})

// Reducers dont mutate the state object
//Pure functions 
// 

const countReducer = ((state = {count: 0}, action)=> {
  switch(action.type){
    
    case 'INCREMENT':
      // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count +action.incrementBy
      }
    case 'DECREMENT': 
    // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy
      }
    case 'SET': 
      return {
        count: action.count
      }
    case 'RESET': 
      return {
        count: action.count
      }
    default: 
      return state
  }
})

const store = createStore(countReducer)

store.subscribe(()=> {
  console.log(store.getState());
})

store.dispatch(setCount({count: 0}))
store.dispatch(IncrementCount({incrementBy: 5})); 
store.dispatch(decrementCount({decrementBy: 2}))
store.dispatch(resetCount());

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });

// store.dispatch( {
//   type: 'SET',
//   count: 101
// })
// store.dispatch({
//   type: 'RESET'
// });

