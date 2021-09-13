import React from 'react';
import Search from './Search';


const Header = ({search,setSearch,searchEmoji}) =>{
	return(
			<div className="header">
				<h5 className="text-center">Emoji Finder 😀</h5>
				<p className="text-center">Made with ♥ by{" "} <a href="https://github.com/Rahul218691/" target="_blank" rel="noreferrer">Rahul Guptha</a></p>
				<div className="header__search">
					<Search 
				       search={search}
				       setSearch={setSearch}
				       searchEmoji={searchEmoji}
					/>
				</div>
			</div>
		)
}

export default Header;