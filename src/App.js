import React, { Component, Suspense } from 'react';
import './App.css';
import LoadingGif from './loading.gif'
const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Search = React.lazy(() => import('./components/Search/Search'));
const RestaurantCard = React.lazy(() => import('./components/RestaurantCard/RestaurantCard'));

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
      fetch(`https://opentable.herokuapp.com/api/restaurants?city=${query}`)
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
        
        <Suspense fallback={<div className="container"><h2>LOADING...</h2></div> }>
        <Navbar/>
        </Suspense>
        <div className="outer-container">
          <div className="search">
            <Suspense fallback={<div className="container"><h2>LOADING...</h2></div> }>
            <Search onSearch = {this.performSearch} />
            </Suspense>
          </div>
            <div> 
            <Suspense fallback={<div className="container"><h2>LOADING...</h2><img src={LoadingGif} alt='loading' /></div> }>
            {
              (this.state.results | this.state.restaurants.length === 0) ? 
                <div className="container"><h2>No results</h2></div> 
                  : 
                <RestaurantCard restaurants={this.state.restaurants} />
            }      
            </Suspense>         
            </div> 
          </div>
          
      </div>
    );
  }
}

export default App;