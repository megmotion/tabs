 import React from 'react';

 import { makeStyles } from '@material-ui/core/styles';
 import Paginator from '@material-ui/lab/Pagination';

  const useStyles = makeStyles(theme => ({
  root: {
  	margin:'4vh',
  },
}));

 const Pagination = ({ paginate, tabsPerPage, totalTabs }) => {
 	const classes = useStyles();
 	const pageNumbers = [];
 	const handleChange = (event, value) => paginate(value);

 	for(let i=1; i<= Math.ceil(totalTabs/tabsPerPage); i++) {
 		pageNumbers.push(i)
 	}
 	return (
 		<div>
 			<Paginator 
 				count={Math.ceil(totalTabs/tabsPerPage)} 
 				onChange={handleChange}
 				variant="outlined" 
 				shape="rounded" 
 				size="large"
 				color="primary"
 				className={classes.root}
 			/>
 		</div>
 	);
 }

export default Pagination;