
import  database  from '../firebase/firebase';


//ADD_EXPENSE
// action generator for add expense
export const addExpense = (expense)=> ({
    type: 'ADD_EXPENSE',
    expense
  });

// new AddExpense action integrating database

export const startAddExpense = (expenseData = {})=>{
  return (dispatch)=> {
    const {
      description = '',
      text = '',
      amount = 0,
      createdAt = 0} = expenseData

    const expense = { description, text, amount, createdAt };

   return database.ref('expenses').push(expense).then((ref)=>{
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

//REMOVE_EXPENSE
// action generator for remove expense
export const removeExpense = ({id} = {})=> ({
  type: 'REMOVE_EXPENSE',
  id
});
// integrate remove expense action with the database

export const startRemoveExpense = ({id} = {})=>{
  return dispatch => {
    return database.ref(`expenses/${id}`).remove()
    .then(()=>{
      dispatch(removeExpense({id}))
    })
  }
}



//EDIT_EXPENSE
// action generator for edit expense
export const editExpense = (id, updates)=> ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates)=>{
  return dispatch =>{
    return database.ref(`expenses/${id}`).update(updates).then(()=>{
      dispatch(editExpense(id, updates))
    })
  }
}


// fetch expense from redux 
export const setExpenses = (expenses)=>({
  type: 'SET_EXPENSES',
  expenses
});


export const startSetExpenses = ()=>{
  return (dispatch)=>{
    const expenses = []
    return database.ref('expenses').once('value')
    .then((snapshot)=>{
      snapshot.forEach((childSnapshot)=>{
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
    dispatch(setExpenses(expenses))

    })
  }
}

// fetch all the expenses data once 
// parse the data into an array
// dispatch setExpenses