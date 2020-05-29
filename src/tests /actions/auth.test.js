import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {login, logout, startLogin, startLogout} from '../../actions/auth'

const createMockStore  = configureStore([thunk])

test('Should set up the login action object', ()=>{
  const uid = 'nsvlbdsvbvdabcvkjd'
  const action = login(uid)
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('Should set up Lpgout action object', ()=>{
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  })
})

// test('should start the login process for the user', (done)=>{
//   const store = createMockStore({})
//   store.dispatch(startLogin()).then((userCredentials)=>{
//     expect(userCredentials.user).toEqual(Any(String))
//   })
// })