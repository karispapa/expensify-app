import moment from 'moment'

export default [
  {
    id: '1',
    description: 'lunch',
    text: 'pilau',
    amount: 10000,
    createdAt: 0
  },

  {
    id: '2',
    description: 'Rent',
    text: 'March',
    amount: 100000,
    createdAt: moment(0).subtract(3, 'days').valueOf()
  },

  {
    id: '3',
    description: 'Coffee',
    text: 'Coffee',
    amount: 5000,
    createdAt: moment(0).add(3, 'days').valueOf()
  }
]