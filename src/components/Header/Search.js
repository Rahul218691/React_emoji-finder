import React from 'react';

const Search = ({search,setSearch,searchEmoji}) =>{

	return(
			<div className="search__component">
				<input type="text" placeholder="Search..."
				value={search}
				onChange={(e)=>setSearch(e.target.value)}
				onKeyUp={searchEmoji}
				/>
			</div>
		)
}

export default Search;