import React from 'react';
import {Header} from '../../components/Header';
import { shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'

test('Should Render Header Correctly', ()=> {

  const wrapper  = shallow(<Header startLogout={()=>{}}/>);
  expect(wrapper).toMatchSnapshot();
})

test('Should call Logout on button Click', ()=>{
  const startLogout = jest.fn();

  const wrapper = shallow(<Header startLogout={startLogout}/>)
  wrapper.find('button').simulate('click')
  expect(startLogout).toHaveBeenCalled()
})