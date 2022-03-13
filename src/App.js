import './App.css';
import React from 'react';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
        <PersonCard name= {"Doe, Jane"}  age= {20} hairColor = {"brown"}  />
        <PersonCard name = {"Smith, John"} age={89} hairColor = {"black"} />
    </div>
  );
}

export default App;
