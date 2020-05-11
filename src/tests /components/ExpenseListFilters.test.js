import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters'
import moment from 'moment';


let addTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  addTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      addTextFilter={addTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />)
});

test('Should render expense filters correctly with default data', ()=>{
  expect(wrapper).toMatchSnapshot();
});

test('Should render expense filters correctly with alternative data', ()=>{
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
});


test('should handle text change', ()=>{
  const value = 'bills'
  wrapper.find('input').simulate('change', {
    target: {value}
  })
  expect(addTextFilter).toHaveBeenLastCalledWith(value)
});

test('Should handle sort by amount ', ()=>{
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: {value}
  })
  expect(sortByAmount).toHaveBeenCalled()
  expect(sortByDate).not.toHaveBeenCalled()
});

test('Should handle sort by date ', ()=>{
  wrapper.setProps({
    filters: altFilters
  })
  const value = 'date';
  wrapper.find('select').simulate('change', {
    target: {value}
  })
  expect(sortByAmount).not.toHaveBeenCalled()
  expect(sortByDate).toHaveBeenCalled()
});



test('should handle date changes', ()=>{
  const startDate = moment(0);
  const endDate = moment(0).add(3, 'days');
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
});

test('should handle focus change', ()=>{
  const focused = "endDate"
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused)
  expect(wrapper.state('calenderFocused')).toEqual(focused)
});



