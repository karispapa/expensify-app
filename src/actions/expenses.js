import uuid from 'uuid';
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
      amount =0,
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
//EDIT_EXPENSE
// action generator for edit expense
export const editExpense = (id, updates)=> ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});