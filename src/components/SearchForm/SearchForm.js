import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  searchForArticle = (data, event) => {
    event.preventDefault();
    let arrayOfData = data
    delete arrayOfData["currentPage"]
    let subject; 
    let articles;
    let matchedSearch = []
    for( subject in arrayOfData) {
      for(articles in arrayOfData[subject] ) {
        if( arrayOfData[subject][articles].headline.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
          matchedSearch.push(arrayOfData[subject][articles])
        }
      }
    }
    this.props.showSearch(matchedSearch)
  }

  render() {
    return <form className='top-nav-form'>
      <h1 className='form-heading'>What's<span> New?</span></h1>
      <input
        className='form-search-input' 
        type='text'
        placeholder='Search for news article here.'
        value={this.state.searchTerm}
        name='searchTerm'
        onChange={this.handleChange}
        />

        <button className='search-button' onClick={event => this.searchForArticle(this.props.data, event)}>Search Now</button>
    </form>
  }
}

export default SearchForm;