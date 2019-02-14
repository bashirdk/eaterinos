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
        <div className="container">
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <input 
                type="search"
                name="search"
                ref={(input) => this.query = input}
                placeholder="Enter a city..."
              />
              <button type="submit" id="submit"  >Search</button>
            </form>
          </div>
        </div>
      );
    } 
}

export default Search;