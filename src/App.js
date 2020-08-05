import React from 'react';
import './App.css';
import Recipe from './Recipe';
import { MOCK } from './Mock';

function App() {
  return (

    <div>
      {
        MOCK.map(element =>
          <div>
            <Recipe recipe={element} />
          </div>
        )
      }
    </div>
  );
}

export default App;
