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
      results: false
    };
  }

  componentDidMount() {
    this.performSearch(this.state.query);
  }

  performSearch = (query) => {
    if (query)
    {  
      fetch(`http://opentable.herokuapp.com/api/restaurants?city=${query}`)
        .then(response => response.json())
        .then(responseData => {
          this.setState({
            restaurants: responseData.restaurants,
            loading: false,
            results: false
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }
    else {
      this.setState({
        results: true
      })
    }
  }

  render() {

    return (       
      <div className = "App">
        <Navbar/>
        <div className="outer-container">
          <div className="search">
            <Search onSearch = {this.performSearch} />
          </div>
            <div> 
            {
              (this.state.results | this.state.restaurants.length === 0) ? 
                <div className="container"><h2>No results</h2></div> 
                  : 
                <RestaurantCard restaurants={this.state.restaurants} />
            }               
            </div> 
          </div>
      </div>
    );
  }
}

export default App;