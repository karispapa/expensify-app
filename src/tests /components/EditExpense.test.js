
import React from 'react';
import { shallow } from 'enzyme';
import {EditExpense} from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let  wrapper, editExpense, startRemoveExpense, history

beforeEach(()=>{
  editExpense = jest.fn(); 
  startRemoveExpense = jest.fn();
  history = {push: jest.fn()}
  wrapper = shallow(<EditExpense expense={expenses[2]} editExpense={editExpense} 
    startRemoveExpense={startRemoveExpense} history={history}/>)
});

test('Should render Edit Expense page correctly', ()=>{
  expect(wrapper).toMatchSnapshot();
});

test('Should Handle Edit Expense', ()=>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
});


test('Should Handle Remove Expemse', ()=>{
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[2].id)
})
