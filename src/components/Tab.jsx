 import React from 'react';

 const Tab = ({ id, artist, title, tabTypes }) => {
 	return (
 		<div>
	 		<h4>
	 			<a 
	 				target="_blank"
	 				rel="noopener noreferrer"  
	 				href={`http://www.songsterr.com/a/wa/bestMatchForQueryString?s=${title}&a=${artist}`}>{artist} - {title}
	 			</a>
	 		</h4>
	 		<p>{tabTypes.map((type) => {
	 			return <span key={type}>{type} </span>
	 		})}</p>
 		</div>
 	);
 }

export default Tab;