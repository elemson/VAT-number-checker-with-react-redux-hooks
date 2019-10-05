import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import Store from './store';


function App() {
  return (
    <Provider store= {Store}>X
    <div className="App">
        <header>

          <h1>Vat Check</h1>
        </header>
      </div>
      );
    
</Provider>
  )
}



export default App;
