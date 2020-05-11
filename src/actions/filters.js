//SET_TEXT_FILTER
// action generator for adding text filter
export const addTextFilter = (text = '')=>({
  type: 'ADD_TEXT_FILTER',
  text
});

//SORT_BY_DATE
export const sortByDate = ()=>({
  type: 'SORT_BY_DATE',
});

//SORT_BY_AMOUNT
export const sortByAmount= ()=>({
  type: 'SORT_BY_AMOUNT',
});

//SET_START_DATE

export const setStartDate = (startDate)=> ({
  type: 'SET_START_DATE',
  startDate
});

export const setEndDate = (endDate)=> ({
  type: 'SET_END_DATE',
  endDate
});