import React, { Component } from 'react';
import './App.css';

import TabsList from './components/TabsList';
import Searchbox from './components/Searchbox';
import Spinner from './components/Spinner';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tabs: [],
      searchfield: '',
      fetchInProgress:false
    }
  }

  onSearchChange = (event) => {
     this.setState({ searchfield: event.target.value})
  }

  onSearchTabs = () => {
    this.setState({fetchInProgress: true})
      fetch(`http://www.songsterr.com/a/ra/songs.json?pattern=${this.state.searchfield}`)
        .then(response => response.json())
        .then(items => this.setState({tabs: items, fetchInProgress: false}))
  }

  render() {
      return (
        <div className="App">
          <Searchbox 
            searchChange={this.onSearchChange}
            searchTabs={this.onSearchTabs}
            onKeyDown={this.onKeyDown}
          />
          {
            this.state.fetchInProgress
              ? <Spinner />
              : <TabsList tabs={this.state.tabs}/>
          }
          
        </div>
      );
    }
}

export default App;
