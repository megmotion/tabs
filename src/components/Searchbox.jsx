 import React from 'react';

 import { makeStyles } from '@material-ui/core/styles';
 import Card from '@material-ui/core/Card';
 import TextField from '@material-ui/core/TextField';
 import Button from '@material-ui/core/Button';

 const useStyles = makeStyles(theme => ({
  root: {
  	textAlign: 'center',
  	position: 'relative',
  	background: '#161616',
  	padding: '0.5vh',
  	[theme.breakpoints.down('md')]: {
      paddingTop: '1.5vh',
    },
  },
  textfield: {
  	margin: '1.5vh',
  },
  button: {
  	margin: '2vh',
  },
  input: {
    fontSize: 'calc(8px + 1.5vh)',
    background:'#fff',
    borderRadius: 0,
    color:'#770'
  }
}));

 const Searchbox = ({ searchChange, searchTabs }) => {
 	const classes = useStyles();
 	const onKeyDown = (event) => {
    if(event.key === "Enter" || event.code === "NumpadEnter"){
      searchTabs()
    }
  }
 	return (
 		<Card className={classes.root} square >
	 		<TextField 
	 			variant="outlined"
	 			onChange={searchChange}
	 			onKeyDown={onKeyDown}
	 			className={classes.textfield}
	 			InputProps={{
			        className: classes.input
			    }}
	 		/>
	 		<Button 
	 				variant="contained" 
	 				onClick={searchTabs} 
	 				color="primary"
	 				size="large"
	 				className={classes.button}
	 		>
	 			Get tabs!
	 		</Button>
 		</Card>
 	);
 }

export default Searchbox