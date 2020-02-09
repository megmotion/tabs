 import React from 'react';

 const Searchbox = ({ searchChange, searchTabs }) => {
 	return (
 		<div>
	 		<input 
	 			type='search' 
	 			placeholder='search tabs' 
	 			onChange={searchChange}
	 		/>
	 		<button type="button" onClick={searchTabs}>Get tabs!</button>
 		</div>
 	);
 }

export default Searchbox