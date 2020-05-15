import React from 'react';
import {connect} from 'react-redux';
import calculateTotals from '../selectors/expensesTotal';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral'


export class ExpenseSummary extends React.Component{
  
  render(){
    return(
      <div>
        {this.props.expenseCount === 0 ? <h1>You have no expenses</h1>:
        
            <h1>{`Viewing ${this.props.expenseCount} 
            ${this.props.expenseCount === 1 ? 'expense': 'expenses'} 
            totaling ${this.props.expenseTotal}`}</h1>
        }
      
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  const expenses = selectExpenses(state.expenses, state.filters)
  return{
  expenseCount: expenses.length,
  expenseTotal: numeral(calculateTotals(expenses)).format('$0,0.00') 
}
};

export default connect(mapStateToProps)(ExpenseSummary)