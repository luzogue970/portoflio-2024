import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Presentation from "./components/Presentation/Presentation";

function App() {
  return (
      <div className="App font-montserrat">
          <header className="App-header">
              <Nav/>
              <Presentation />
          </header>
      </div>
  );
}

export default App;
