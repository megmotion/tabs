import React from 'react';

import icon from '../icon.svg';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Breadcrumbs  from '@material-ui/core/Breadcrumbs';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const useStyles = makeStyles(theme => ({
  listItem:{
  	[theme.breakpoints.down('md')]: {
      padding: '8px',
    },
  },
  icon: {
  	width: 'calc(20px + 2vmin)',
  	minWidth: '32px'
  },
  link: {
  	marginTop: '-0.5vh',
  	'&:hover': {
  		color: '#770',
  	}
  },
  type: {
  	paddingLeft: '10px',
  	[theme.breakpoints.down('md')]: {
      padding: '6px',
    },
  }
}));

const Tab = ({ id, artist, title, tabTypes }) => {
	const classes = useStyles();
 	return (
 		<ListItem className={classes.listItem}>
	 		<ListItemAvatar >
		          <img src={icon} alt='music note' className={classes.icon}/>
	        </ListItemAvatar>
 			<Link
 				target="_blank"
 				underline="none"
 				className={classes.link}
 				rel="noopener noreferrer"  
 				href={`http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${title}&a=${artist}`}>{artist} - {title}
 			</Link>
	 		<Breadcrumbs  className={classes.type}>
		 		{tabTypes.map((type) => {
		 			return <span key={type}>
		 			{
		 				type === 'TEXT_GUITAR_TAB' ? 'GUITAR' :
		 				type === 'TEXT_BASS_TAB' ? 'BASS' : type
		 			} </span>
		 		})}
	 		</Breadcrumbs>
 		</ListItem>
 	);
}

export default Tab;