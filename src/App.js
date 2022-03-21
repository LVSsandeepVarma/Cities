import './App.css'
import React from 'react'
import {BrouserRouter as  Router,Route,Switch} from 'react-router-dom'
import Register from './components/register'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
