import moment from 'moment';
import expenses from '../fixtures/expenses'

import selectExpenses from '../../selectors/expenses';

test('Should Test filter by text value', ()=>{
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }

  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([ expenses[2], expenses[1] ])
})

test('Should Test filter by start Date value', ()=>{
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }

  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([ expenses[2], expenses[0] ])
})

test('Should Test filter by end Date value', ()=>{
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  }

  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([ expenses[0], expenses[1] ])
})

test('Should Test sort by date', ()=>{
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }

  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ])
})

test('Should Test sort by amount', ()=>{
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }

  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([ expenses[1], expenses[0], expenses[2] ])
})