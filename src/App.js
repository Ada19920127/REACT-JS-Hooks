import React, { useState, useEffect } from "react";
import TerminatorList from "./components/terminator-list/terminator-list.component";

import SearchBox from "./components/searchbox/searchbox.component";

import './App.css';

function App () {

  const [models, setModels] = useState([]);
  const[searchfield, setSearchfield] =useState('');
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  useEffect(
    () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setModels(users));
  }, []); 

  const filteredModels = models.filter((model) => {
    return model.name.toLowerCase()
    .includes(searchfield.toLowerCase());
  });
  if(models.length === 0) {
    return <h1>Betöltés folyamatban...</h1>
  }
  return (
    <div className="tc">
      <h1 className= "f1">Terminator modellek</h1>
      <SearchBox searchChange = {onSearchChange}/>
      <TerminatorList models={filteredModels}/>
    </div>
  );
}

export default App;
