import { Results } from './Results.jsx';

import { useState } from 'react' // Importation de React et useState depuis la bibliothèque React
export function Search(){
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setQuery(event.target.value)
        fetch('https://api.tvmaze.com/search/shows?q='+ query)
        .then((response)=>response.json())
        .then (data => setSearchResults(data))
        console.log(searchResults)
      };

    return(
        <>
        <div className="mt-5 input-group">
        <input
        type="search"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={handleChange}
        />
    
        </div>

        <Results results={searchResults} />

        </>
    )
}