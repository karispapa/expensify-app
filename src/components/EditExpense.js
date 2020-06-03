import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startEditExpense, startRemoveExpense} from '../actions/expenses'

export class EditExpense extends React.Component {
  // console.log(props) 
  
  onRemove = ()=>{
    this.props.startRemoveExpense(this.props.expense.id)
      this.props.history.push('/dashboard')
  };


  onSubmit = (expense)=>{
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push('/dashboard')
  };

  render (){
  return (
  <div>
    <div className="page-header page-header__small">
      <div className="content-container" >
        <h1 className="page-header__title">Edit Expense</h1>
      </div>  
    </div>   
    <div className="content-container">
      <ExpenseForm 
        expense={this.props.expense}
        onSubmit={this.onSubmit}
      />
      <button className="button__remove" onClick={this.onRemove}>Remove Expense</button>
    </div>
  </div>
)}};
const mapStateToProps = (state, props)=> {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
};

const mapDispatchToProps = (dispatch, props)=>{
  return{
    startEditExpense: (id, updates)=> dispatch(startEditExpense(id, updates)),
    startRemoveExpense: (id)=> dispatch(startRemoveExpense({id}))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
