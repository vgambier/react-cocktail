import React from 'react';
import './App.css';
import Recipe from './Recipe';
import { MOCK } from './Mock';

function App() {
  return (

    MOCK.map(element =>
      <div>
        <Recipe recipe={element} />
      </div>
    )

  );
}

export default App;
