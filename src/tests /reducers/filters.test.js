import moment from  'moment'
import filtersReducer from '../../reducers/filters';


test('should setup default filter values', ()=>{

  let state = filtersReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', ()=>{
  let state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', ()=>{
  const currentState ={
    ext: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const action = {type: 'SORT_BY_DATE'}
  let state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

test('should set the text filter value', ()=>{

  const text = 'rent'  
  const action = {
    type: 'ADD_TEXT_FILTER',
    text
}
  let state = filtersReducer(undefined, action)
  expect(state.text).toBe(text)
})

test('should set the start date filter value', ()=>{
  const startDate = moment(300000)
  const action = {
    type: 'SET_START_DATE',
    startDate
}
  let state = filtersReducer(undefined, action)
  expect(state.startDate).toEqual(startDate)
})

test('should set the end date filter value', ()=>{
  const endDate = moment(3008900)
  const action = {
    type: 'SET_END_DATE',
    endDate
}
  let state = filtersReducer(undefined, action)
  expect(state.endDate).toEqual(endDate)
})
