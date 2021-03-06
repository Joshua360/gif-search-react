import React from 'react';

function SearchForm(props) {
  const [searhTerm, setQuery] = React.useState('');

  const onSearchChange = (e) => { 
    // Update state 
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(searhTerm);
    e.currentTarget.reset();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">Search</label>
      <input type="search"
        onChange={onSearchChange}
        name="search"
        placeholder="Search anything e.g dog"
      />
      <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
    </form>
  );
}

export default SearchForm;