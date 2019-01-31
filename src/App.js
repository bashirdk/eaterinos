import React, { Component } from 'react';
import Search from './components/Search/Search';
import './App.css';
import RestaurantCard from './components/RestaurantCard/RestaurantCard';
import Navbar from './components/Navbar/Navbar';

class App extends Component {

  constructor() {
    super();
    this.textInput = React.createRef();
    this.state = {
      restaurants: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.performSearch(this.state.query);
  }

  performSearch = (query) => {
    fetch(`http://opentable.herokuapp.com/api/restaurants?city=${query}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          restaurants: responseData.restaurants,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {

    return (       
      <div className = "App">
        <Navbar/>
        <div class="outer-container">
          <div class="container">
            <Search onSearch = {this.performSearch} /> 
            <div> 
              <RestaurantCard restaurants={this.state.restaurants} />
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;