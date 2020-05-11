

const expensesReducerDefault = [];

// Expenses reducer

export default (state = expensesReducerDefault, action)=>{

  switch(action.type){

    case 'ADD_EXPENSE':
      return [...state, action.expense]

    case 'REMOVE_EXPENSE':
      return state.filter(({id})=> action.id !== id) // filter returns all items in the array that pass the set criteria

     case 'EDIT_EXPENSE': 
     return state.map((expense)=>{
       if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          }
       } else{
          return expense
       }
     });
    default: 
      return state
  }
};