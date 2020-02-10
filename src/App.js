import React, { useState, useEffect } from 'react';
import './App.css';

import Pagination from './components/Pagination';
import Searchbox from './components/Searchbox';
import Spinner from './components/Spinner';
import TabsList from './components/TabsList';

const App = () => {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchfield, setSearchfield] = useState('');
  const [tabsPerPage] = useState(5);

  //Tab search
  const onSearchChange = (event) => {
     setSearchfield(event.target.value)
  }

  const onSearchTabs = () => {
    setLoading(true)
      fetch(`http://www.songsterr.com/a/ra/songs.json?pattern=${searchfield}`)
        .then(response => response.json())
        .then(items => {
          setTabs(items);
          setLoading(false)
        })
  }

  //Pagination
  const indexOfLastTab = currentPage * tabsPerPage;
  const indexOfFirstTab = indexOfLastTab - tabsPerPage;
  const currentTabs = tabs.slice(indexOfFirstTab, indexOfLastTab);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <Searchbox 
        searchChange={onSearchChange}
        searchTabs={onSearchTabs}
      />
      {
        loading
          ? <Spinner />
          : <div>
              <TabsList tabs={currentTabs}/>
              <Pagination paginate={paginate} tabsPerPage={tabsPerPage} totalTabs={tabs.length}/>
            </div>
      }      
    </div>
  );
}

export default App;
