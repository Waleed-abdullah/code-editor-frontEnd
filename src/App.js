import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import PlayGround from "./components/CodePlayGround/PlayGround.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Homepage from './components/Homepage/Homepage.js'
import SnippetPlayground from "./components/CodePlayGround/SnippetPlayground.js";

const App = () => {
  const [user, setUser] = useState(null)

  return(
    <Router>
      <Switch>
        <Route path='/dashboard/:username'>
          {user ? <Dashboard user={user} setUser={setUser}/> : <Redirect to='/'/>}
        </Route>
        <Route path='/editor/projects/:projectName'>
          {user ? <PlayGround user={user}/> : <Redirect to='/'/>}
        </Route>
        <Route path='/editor/snippets/:snippetName/:language'>
          {user ? <SnippetPlayground user={user}/> : <Redirect to='/'/>}
        </Route>
        <Route path='/'>
          <Homepage user={user} setUser={setUser}/>  
        </Route>
      </Switch>
    </Router>
  )
}
export default App;

// {name: 'Nouman', photoURL: ''}