 import React from 'react';

 import Tab from './Tab';

 const TabsList = ({ tabs }) => {
 	return (
 		<div>
 			{
				tabs.map((song) => {
			 		return (
			 			<Tab 
			 				key={song.id} 
			 				id={song.id} 
			 				title={song.title} 
			 				artist={song.artist.nameWithoutThePrefix}
			 				tabTypes={song.tabTypes}
			 			/>
			 		);
			 	})
			}
 		</div>
 	);
 }

export default TabsList;