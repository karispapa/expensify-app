import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import calculateTotals from '../selectors/expensesTotal';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral'


export const ExpenseSummary = ({expenseCount, expenseTotal}) => {
  
  const expenseWord = expenseCount === 1 ? 'expense': 'expenses'
  
    return(
      <div className="page-header">
        <div className="content-container">
          <div className="page-header__title">
          {expenseCount === 0 ? <h1>You have no expenses</h1>:  
            <h1 >Viewing <span>{expenseCount}</span>  {expenseWord} totaling <span>{expenseTotal}</span> </h1>
          }
         </div>
         <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
         </div>

        </div>
        
      
      </div>
    )
  }

const mapStateToProps = (state)=>{
  const expenses = selectExpenses(state.expenses, state.filters)
  return{
  expenseCount: expenses.length,
  expenseTotal: numeral(calculateTotals(expenses)).format('$0,0.00') 
}
};

export default connect(mapStateToProps)(ExpenseSummary)