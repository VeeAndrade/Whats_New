import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle'

describe('NewsArticle', () => {
  it('should render a new news article', () => {
    const wrapper = shallow(<NewsArticle 
    headline='Fake News'
    image='url@url.com'
    url='url@url.com'
    description='blah'
    />)

    expect(wrapper).toMatchSnapshot();
  });
});