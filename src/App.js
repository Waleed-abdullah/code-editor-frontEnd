import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import PlayGround from "./components/CodePlayGround/PlayGround.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Homepage from './components/Homepage/Homepage.js'

const App = () => {
  const [user, setUser] = useState(null)
  const [currentProject, setCurrentProject] = useState('')

  return(
    <Router>
      <Switch>
        <Route path='/dashboard/:username'>
          {user ? <Dashboard user={user} setUser={setUser} setCurrentProject={setCurrentProject}/> : <Redirect to='/'/>}
        </Route>
        <Route path='/editor/:projectName'>
          {user ? <PlayGround user={user} currentProject={currentProject}/> : <Redirect to='/'/>}
        </Route>
        <Route path='/'>
          <Homepage user={user} setUser={setUser}/>  
        </Route>
      </Switch>
    </Router>
  )
}

export default App;