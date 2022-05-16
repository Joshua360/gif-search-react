import React, {useState, useEffect} from 'react'
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import GifList from './GifList';

function App() {
  const [data, setData] = useState([]); // declare state
  const [query, setQuery] = useState('dogs'); // declare state
  const performSearch = (value) => setQuery(value);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => { 
    axios(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=cA3ZGs6TkBuYHgKsOOBiU8af2S09JZYQ`)
      .then(response => setData(response.data.data))
      .catch(error => console.log('Error fetching and parsing data', error))
      .finally(() => setIsLoading(false));
  }, [query]);


  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title"><a href="/">GifSearch</a></h1>
          <SearchForm onSearch={performSearch} />

        </div>
      </div>
      <div className="main-content">
      {
        isLoading
          ? <p className='loading'>Loading...</p>
          : <GifList data={data} />
      }
      </div>
    </>
  );
}

export default App

