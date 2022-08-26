import React from "react";
 
 
function SearchBar({ searchString, setSearchString}) {
   return (
     <div className="searchbar">
       <i className='bx bx-search-alt' ></i>
       <input
         type="text"
         id="search"
         placeholder="Type here to search..."
          value={searchString} onChange={(e)=> setSearchString(e.target.value)}
       />
     </div>
   );
 }
 
 export default SearchBar;
 