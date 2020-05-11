import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound';

test('Should render 404 and link to the home page', ()=>{
  const wrapper  = shallow(<NotFound />)
  expect(wrapper).toMatchSnapshot()
})