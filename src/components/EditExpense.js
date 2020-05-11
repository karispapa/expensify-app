import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense, removeExpense} from '../actions/expenses'

export class EditExpense extends React.Component {
  // console.log(props) 
  
  onRemove = ()=>{
    this.props.removeExpense(this.props.expense.id)
    this.props.history.push('/')
  };
  

  onSubmit = (expense)=>{
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  };

  render (){
  return (
  <div>
   <ExpenseForm 
    expense={this.props.expense}
    onSubmit={this.onSubmit}
   /> 
   <button onClick={this.onRemove}>Remove</button>
  </div>
)}};
const mapStateToProps = (state, props)=> {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
};

const mapDispatchToProps = (dispatch, props)=>{
  return{
    editExpense: (expenseId, expense)=> dispatch(editExpense(expenseId, expense)),
    removeExpense: (expenseId)=> dispatch(removeExpense({id: expenseId}))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
