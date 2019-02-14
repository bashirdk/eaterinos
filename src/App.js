import React, { Component, Suspense } from 'react';
import './App.css';
import LoadingGif from './loading.gif'

import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
const RestaurantCard = React.lazy(() => import('./components/RestaurantCard/RestaurantCard'));

export class AppService {
  static queryRestaurants = async (query) => {
    query = (query == null) ? null : query.trim();
    if (query) {  
      try {
        let responseData = (await fetch(`https://opentable.herokuapp.com/api/restaurants?city=${query}`).then(response => response.json()));
        return {
          restaurants: responseData.restaurants,
          loading: false,
          no_results: false, 
          query: query 
        };
      } catch (e) {
        console.error(e);
      }
    }
    else {
      return {
        no_results: true,
      }
    }
  }
}

class App extends Component {

  //initialize variable to determine first onload
  _onready = true;

  constructor() {
    super();
    this.state = {
      restaurants: [],
      loading: true,
      no_results: true,      
      query: ''
    };
  }
  
  performSearch = async (query) => {
    this._onready = false;
    this.setState(await AppService.queryRestaurants(query));
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
                    <RestaurantCard details={this.state}/>
              }
            </Suspense>
          </div> 
        </div>          
      </div>
    );
  }
}

export default App;