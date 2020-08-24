import React from 'react';
import logo from './logo.svg';
import './App.css';
import useMemoState from './hooks/useMemoState';
const App = () => {
  console.log('renderApp');
  const [value, setter] = useMemoState({ val: 0 });
  // console.log(value);
  // console.log(setter);
  setter({ val: 0 });

  return (
    <div className="App">
      {/* {console.log(value)} */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>useMemoState hook</p>
      </header>
    </div>
  );
};

export default App;
