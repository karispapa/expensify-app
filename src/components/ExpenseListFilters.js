import React from 'react';
import { connect } from 'react-redux';
import { addTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize';


export class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  }

  onDatesChange =({startDate, endDate})=>{
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate)
  };

  onFocusChange = (calenderFocused)=>{
    this.setState(()=>({calenderFocused}))
  };

  onTextChange = (e)=>{
    this.props.addTextFilter(e.target.value)
  };

  onSortChange = (e)=>{
    if(e.target.value === "date"){
      this.props.sortByDate()
    }else if(e.target.value === "amount"){
      this.props.sortByAmount()
    }
};

  render(){
    return (
      <div className="content-container">
        <div className="input-group">
        <div className="input-group__item">
          <input type='text'
            className="text-input"  
            placeholder="Search Expenses"        
            value={this.props.filters.text} 
            onChange={this.onTextChange}/>  
        </div>
        <div className="input-group__item">
          <select 
            className="select-input"
            value={this.props.filters.sortBy} // controlled input - input controlled by js
              onChange={this.onSortChange}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="input-group__item">
          <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={this.state.calenderFocused}
          numberOfMonths={1}
          isOutsideRange={()=> false}
          showClearDates={true}
          startDateId='id1'
          endDateId='id2'
          />
        </div>
        </div> 
        </div>
    )
  }

}

const mapStateToProps = (state)=>({ filters: state.filters })

const mapDispatchToProps = (dispatch)=>({
  addTextFilter: (text)=> dispatch(addTextFilter(text)), 
  sortByDate: ()=> dispatch(sortByDate()), 
  sortByAmount: ()=> dispatch(sortByAmount()), 
  setStartDate: (startDate)=> dispatch(setStartDate(startDate)), 
  setEndDate: (endDate)=> dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);