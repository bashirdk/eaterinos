import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Search from './Search';

describe('<Search />', () => {
  it('should pass if button exists', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('button')).to.be.lengthOf(1);
  });
  it('should fill input field with text', () => {
    const wrapper = mount(<Search onSearch={(query) => query}/>);
    wrapper.find('input').instance().value = 'Toronto'; 
    expect(wrapper.find('input').instance().value).to.be.equal('Toronto');
  });
  it('input field should be empty after submitting', () => {
    const wrapper = mount(<Search onSearch={(query) => query}/>);
    wrapper.find('input').instance().value = 'Toronto'; 
    wrapper.find('button').simulate('submit');
    expect(wrapper.find('input').instance().value).to.be.equal('');
  });
})
