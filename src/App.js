import React, { useState } from 'react';
import './App.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Pagination from './components/Pagination';
import Searchbox from './components/Searchbox';
import Spinner from './components/Spinner';
import TabsList from './components/TabsList';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const theme = createMuiTheme({
   palette: {
      primary: {
         light: '#fff',
         main: '#aa1',
         dark: '#770'
      },
      secondary: {
        main: '#ccc',
      },
   },
   typography: { 
      useNextVariants: true
   }
});

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1200,
    minHeight: '85vh',
    margin: 'auto',
    marginTop: '3vh',
    background: '#eee',
    fontSize: 'calc(10px + 2vmin)',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: '0',
    },
  },
  container: {
    padding: '2vh',
    [theme.breakpoints.down('md')]: {
      padding: '0.5vh',
    },
  }
}));

const App = () => {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchfield, setSearchfield] = useState('');
  const [tabsPerPage] = useState(12);
  const classes = useStyles();

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
    <MuiThemeProvider theme = { theme }>
      <Paper elevation={16} className={classes.root} square >
        <Searchbox 
          searchChange={onSearchChange}
          searchTabs={onSearchTabs}
        />
        {
          loading
            ? <Spinner />
            : <div className={classes.container}>
                <TabsList tabs={currentTabs}/>
                { tabs.length>12
                ? <Pagination paginate={paginate} tabsPerPage={tabsPerPage} totalTabs={tabs.length}/>
                : null
              }
              </div>
        }      
      </Paper>
      </MuiThemeProvider> 
  );
}

export default App;
