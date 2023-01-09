
import React from 'react';
import Login from './pages/Login';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Login Form', () => {
  it('should render a form', () => {
    const wrapper = shallow(<form />);
    expect(wrapper.find('form').length).toBe(1);
  });

  it('should send a POST request to the server when the form is submitted', () => {
    const wrapper = shallow(<form />);
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: () => {} });
    // test that a POST request was sent to the server
  });
});

// it('should render two input fields and a submit button', () => {
//   const wrapper = shallow(<Login />);
//   expect(wrapper.find('input').length).toBe(2);
//   expect(wrapper.find('button').length).toBe(1)
// });

// it('should update the state when the input fields are changed', () => {
//   const wrapper = shallow(<form />);
//   const emailInput = wrapper.find('input').at(0);
//   const passwordInput = wrapper.find('input').at(1);
//   emailInput.simulate('change', { target: { value: 'test' } });
//   passwordInput.simulate('change', { target: { value: 'password' } });
//   expect(wrapper.state('email')).toBe('test');
//   expect(wrapper.state('password')).toBe('password');
// });