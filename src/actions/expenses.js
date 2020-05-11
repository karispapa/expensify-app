import uuid from 'uuid';


//ADD_EXPENSE
// action generator for add expense
export const addExpense = ({
  description = '',
  text = '',
  amount =0,
createdAt = 0}
  ={})=> ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      text,
      amount,
      createdAt
    }
});

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