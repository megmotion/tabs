import React, { Component } from 'react';
import './App.css';

import TabsList from './components/TabsList';
import Searchbox from './components/Searchbox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tabs: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
     this.setState({ searchfield: event.target.value})
  }

  onSearchTabs = () => {
     fetch(`http://www.songsterr.com/a/ra/songs.json?pattern=${this.state.searchfield}`)
      .then(response => response.json())
      .then(items => this.setState({tabs: items}))
  }

  render() {
      return (
        <div className="App">
          <Searchbox 
            searchChange={this.onSearchChange}
            searchTabs={this.onSearchTabs}
          />
          <TabsList tabs={this.state.tabs}/>
        </div>
      );
    }
}

export default App;
