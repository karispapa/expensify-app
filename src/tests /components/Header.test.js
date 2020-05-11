import React from 'react';
import Header from '../../components/Header';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow} from 'enzyme'
import toJSON from 'enzyme-to-json'

test('Should Render Header Correctly', ()=> {

  const wrapper  = shallow(<Header/>);
  expect(wrapper).toMatchSnapshot()

  // expect(wrapper.find('h1').text()).toBe('Expensify App')
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header/>)
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
})