import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
  	marginTop:'20vh',
  	[theme.breakpoints.down('md')]: {
      marginTop:'10vh'
    },
  },
}));

const Spinner = () => {
	const classes = useStyles();
 	return (
 		<CircularProgress className={classes.root} color="secondary" size={300} thickness={6}/>
 	);
 }

export default Spinner;