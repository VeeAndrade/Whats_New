import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu'

describe('Menu', () => {
  it('should render a Menu component', () => {
    const wrapper = shallow(<Menu changeCurrentPage={jest.fn()}/>)

    expect(wrapper).toMatchSnapshot();
  });
});