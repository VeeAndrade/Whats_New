import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment'
import health from '../../data/health'
import science from '../../data/science'
import technology from '../../data/technology'
import NewsContainer from '../NewsContainer/NewsContainer.js'
import SearchForm from '../SearchForm/SearchForm'
import Menu from '../Menu/Menu'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: local,
      entertainment: entertainment,
      health: health,
      science: science,
      technology: technology,
      currentPage: local
    }
  }

  showSearchResults = (list) => {
    this.setState({currentPage: list})
  }

  changeCurrentPage = (category) => {
    this.setState({currentPage: this.state[category]})
  }

  render () {
    return (
      <section className='app'>
        <SearchForm showSearch={this.showSearchResults} data={this.state}/>
        <Menu changeCurrentPage={this.changeCurrentPage}/>
        <NewsContainer currentPage={this.state.currentPage}/>
      </section>
    );
  }
}

export default App;
