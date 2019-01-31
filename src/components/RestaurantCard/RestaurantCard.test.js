import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantCard from './RestaurantCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RestaurantCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
