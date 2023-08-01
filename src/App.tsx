// src/App.tsx

import React from 'react';
import './styles/App.css';
import TagCounter from './components/TagCounter';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Contador de Tags HTML</h1>
      <TagCounter />
    </div>
  );
};

export default App;
