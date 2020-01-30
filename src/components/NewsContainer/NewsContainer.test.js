import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer'

describe('NewsContainer', () => {
  it('should render all the news articles', () => {
    const wrapper = shallow( <NewsContainer currentPage= {[{
          headline: 'The Underworld',
          image: 'image@url.com',
          description: 'The screams from hell finally come through',
          url: 'url@url.com'
        }]}
        />)

    expect(wrapper).toMatchSnapshot();
  });
});