import moment from 'moment';
import {
  addTextFilter, 
  sortByDate, 
  sortByAmount,
  setStartDate, 
  setEndDate
} from '../../actions/filters'

// add text filter test with values passed 
test('Should generate a new text filter object with the value of the string passed', ()=>{
  const action = addTextFilter('Rent')
  expect(action).toEqual({
    type: 'ADD_TEXT_FILTER',
    text: 'Rent'
  })
});

// add text filter test with default values 
test('Should generate a new text filter object with default values', ()=>{
  const action = addTextFilter()
  expect(action).toEqual({
    type: 'ADD_TEXT_FILTER',
    text: ''
  })
});

// Sort by date test

test('Should generate the sort by date filter object', ()=>{ 
  expect(sortByDate()).toEqual({type: 'SORT_BY_DATE' })
});

// Sort by amount test

test('Should generate the sort by amount filter object', ()=>{
  expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'})
});

// Set start date by date test

test('Should generate the start date  object for filtering', ()=>{
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})
// Set end date by date test

test('Should generate the end date object for filtering', ()=>{
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});