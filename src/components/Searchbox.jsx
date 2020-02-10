 import React from 'react';

 const Searchbox = ({ searchChange, searchTabs }) => {
 	const onKeyDown = (event) => {
    if(event.key === "Enter" || event.code === "NumpadEnter"){
      searchTabs()
    }
  }
 	return (
 		<div>
	 		<input 
	 			type='search' 
	 			placeholder='search tabs' 
	 			onChange={searchChange}
	 			onKeyDown={onKeyDown}
	 		/>
	 		<button type="button" onClick={searchTabs}>Get tabs!</button>
 		</div>
 	);
 }

export default Searchbox