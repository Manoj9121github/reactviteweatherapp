import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

const Searchbar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    if (search.trim()) {
      onSearch(search.trim());
      setSearch('');
    }
  };

  return (
    <InputGroup className="mb-4 w-50 m-auto">
      <FormControl
        placeholder="Enter city name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <Button variant="primary" onClick={handleSearch}>Search</Button>
    </InputGroup>
  );
};

export default Searchbar;