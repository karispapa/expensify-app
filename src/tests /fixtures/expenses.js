import moment from 'moment'

export default [
  {
    id: '1',
    description: 'lunch',
    note: 'pilau',
    amount: 10000,
    createdAt: 0
  },

  {
    id: '2',
    description: 'Rent',
    note: 'March',
    amount: 100000,
    createdAt: moment(0).subtract(3, 'days').valueOf()
  },

  {
    id: '3',
    description: 'Coffee',
    note: 'Coffee',
    amount: 5000,
    createdAt: moment(0).add(3, 'days').valueOf()
  }
]