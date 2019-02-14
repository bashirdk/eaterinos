import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import RestaurantCard from './RestaurantCard'
import App, { AppService } from '../../App';

describe('<Search />', () => {
  it('should pass when searching for a city', async () => {
    let result = await AppService.queryRestaurants("Toronto"); 
    const wrapper = shallow(<RestaurantCard details={result}/>);
    expect(wrapper.find('.restaurant-card').length).to.be.greaterThan(1);
  });
  it('Says No results when searching a non city', async () => {
    let result = await AppService.queryRestaurants("..."); 
    const wrapper = shallow(<RestaurantCard details={result} />);
    expect(wrapper.find('h2').text()).to.contain('No results');
  });
})
