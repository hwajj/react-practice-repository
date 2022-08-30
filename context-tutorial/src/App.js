import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

const App = (props) => {
  return (
    <ColorContext.Provider value={{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
};

export default App;
