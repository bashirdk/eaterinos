import React, { Component, Suspense } from 'react';
import './App.css';
import LoadingGif from './loading.gif'

import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
const RestaurantCard = React.lazy(() => import('./components/RestaurantCard/RestaurantCard'));

class App extends Component {

  //initialize variable to determine first onload
  _onready = true;

  constructor() {
    super();
    this.state = {
      restaurants: [],
      loading: true,
      results: false,      
      query: ''
    };
  }
  
  performSearch = async (query) => {
    this._onready = false;
    if (query) {  
      try {
        let responseData = (await 
          (await fetch(`https://opentable.herokuapp.com/api/restaurants?city=${query}`)).json()
        );
        this.setState({
          restaurants: responseData.restaurants,
          loading: false,
          results: false, 
          query: query 
        });
      } catch (e) {
        console.error(e);
      }
    }
    else {
      this.setState({
        results: true,
      });
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
            <Suspense fallback={
              <div className="container">
                <h2>LOADING...</h2>
                <img src={LoadingGif} alt='loading' />
              </div>
            }>
              { this._onready ? 
                  <div ></div> : 
                  (this.state.results | this.state.restaurants.length === 0) ? 
                    <div className="container"><h2>No results</h2></div> : 
                    <RestaurantCard restaurants={this.state.restaurants} query={this.state.query} />
              }
            </Suspense>
          </div> 
        </div>
          
      </div>
    );
  }
}

export default App;