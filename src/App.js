import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from './pages';

// import Menu from './components/Menu';

function App() {
  return (
    <div className="App">

      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/about/test" component={Home} />



    </div>
  );
}

export default App;
