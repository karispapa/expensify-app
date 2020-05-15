import expenses from '../fixtures/expenses';
import getTotalExpenses from '../../selectors/expensesTotal';


test('Return zero for no expenses', ()=>{
  const total = getTotalExpenses([]);
  expect(total).toEqual(0)
});

test('should add a single expense correctly', ()=>{
  const total = getTotalExpenses([expenses[0]]);
  expect(total).toEqual(10000) 
})

test('should add multiple expense correctly', ()=>{
  const total = getTotalExpenses(expenses);
  expect(total).toEqual(115000) 
})