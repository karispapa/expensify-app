import authReducer from '../../reducers/auth'

test('Should setup the auth reducer with default values', ()=>{
  const state = authReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({})
})

test('should setup user id for login', ()=>{
  const action = {
    type: 'LOGIN',
    uid: '2138r2382930379'
  }

  const state = authReducer(undefined, action)
  expect(state.uid).toBe(action.uid)
})

test('should clear user id for logout', ()=>{
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducer({uid: '23435342'}, action)
  expect(state).toEqual({})
})