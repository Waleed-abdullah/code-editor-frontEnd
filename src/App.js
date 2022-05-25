import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import PlayGround from "./components/CodePlayGround/PlayGround.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Homepage from './components/Homepage/Homepage.js'
import SnippetPlayground from "./components/CodePlayGround/SnippetPlayground.js";
import User from "./components/UserProfile/User.js";
import SearchResults from "./components/UserProfile/SearchResults.js";

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('logged-in-user'))){
      setUser(JSON.parse(localStorage.getItem('logged-in-user')))
    }
  }, [])

  return(
    <Router>
      <Switch>
        <Route path='/dashboard/:username'>
          {<Dashboard user={user} setUser={setUser}/>}
        </Route>
        <Route path='/editor/projects/:projectName'>
          {<PlayGround user={user} setUser={setUser}/>}
        </Route>
        <Route path='/editor/snippets/:snippetName/:language'>
          {<SnippetPlayground user={user} setUser={setUser}/>}
        </Route>
        <Route path='/search/:query'>
          {<SearchResults user={user} setUser={setUser}/>}
        </Route>
        <Route path='/users/profile/:id'>
          {<User user={user} setUser={setUser}/>}
        </Route>
        <Route path='/'>
          <Homepage user={user} setUser={setUser}/>  
        </Route>
      </Switch>
    </Router>
  )
}

export default App;