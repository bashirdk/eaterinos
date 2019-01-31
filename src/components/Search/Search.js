import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }

  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label> Search for a city </label>
          <input 
            type="search"
            name="search"
            ref={(input) => this.query = input}
            placeholder="Location..."
          />
          <button type="submit" id="submit">Search</button>
        </form>
      );
    }

  
}

export default Search;
