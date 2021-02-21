import React, { useState } from "react";

//Style
import './style.css';


const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }


  return (
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline mx-auto">
            <input
            placeholder="Search" 
            aria-label="Search"
            className="form-control-search mr-sm-2"
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={callSearchFunction} type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg> 
            </button>
          </form>
        </nav>
    );
}

export default SearchBar;