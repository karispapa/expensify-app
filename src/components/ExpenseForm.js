import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
 

export default class ExpenseForm extends React.Component {

  constructor (props){
    super(props)
    this.state = {
      description: props.expense ? props.expense.description :'',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? props.expense.amount.toString() : '',
      createdAt: props.expense ?  moment(props.expense.createdAt): moment(),
      calenderFocused: false,
      error: ''
    };
  };
  
  onDescriptionChange = (e)=>{
    const description = e.target.value;
    /*
    // can use e.persist() if you dont want a new variable
      e.persist()
    this.setState(()=>({description: e.target.value}));
    */

    this.setState(()=>({description}));
  }

  onNoteChange = (e)=>{
    const note = e.target.value;
    this.setState(()=>({note}))
  }

  onAmountChange = (e)=>{
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(()=>({amount}))
    }
  };

  onDateChange = (createdAt)=>{
    if(createdAt){
      this.setState({createdAt})
    }
  };
  
  onFocusChange = ({ focused })=>{
    this.setState({calenderFocused: focused})
  }

  onSubmit = (e)=>{
    e.preventDefault();

    if(!this.state.description || !this.state.amount){
      this.setState(()=>({error: 'Please Provide Description and Amount'}))
    }else {
      this.setState(()=>({error: ''}))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }

  }
  render(){
    return (
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
            className="text-input"
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            className="text-input"
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange} 
          />
          <SingleDatePicker
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.calenderFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            id="your_unique_id" // PropTypes.string.isRequired,
            numberOfMonths={1}
            isOutsideRange={()=>false}
        />
          <textarea
          className="textarea"
            placeholder="Add a note for your expense (Optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
            
          >
          </textarea>
          <div>
            <button
            className="button"
            type="submit"
            >{this.props.expense ? 'Edit Expense' : 'Save Expense'}</button>
          </div>
          
        
        </form>
    )
  }

}