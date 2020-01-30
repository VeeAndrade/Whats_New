import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import local from '../../data/local';
import health from '../../data/health'
import App from './App';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have a state', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state('local')).toEqual(local)
  });

  it('should show search results', () => {
    const wrapper = shallow(<App />);

    wrapper.instance().showSearchResults(local)
    expect(wrapper.state('local')).toEqual(local)
  });

  it('should change the the current page', () => {
    const wrapper = shallow(<App />);
    const catagory = 'health';

    wrapper.instance().changeCurrentPage(catagory)
    expect(wrapper.state(catagory)).toEqual(health);
  });
});
