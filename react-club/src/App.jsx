import { useState } from 'react'

import './App.css'
import Top from './compounents/Top.jsx';
import Home from './compounents/Home.jsx';
import Homecards from './compounents/Homecards.jsx';
import ClubPage from './compounents/ClubPage.jsx';
import ClubDetails from './compounents/ClubDetails.jsx';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

function App() {
  return (
        <>
        <Router>
        <Top />
    
            <Switch>
              <Route exact path="/">
                  <>
                  <Home/>
                  <Homecards/>
                  </>
              </Route>
              <Route  exact path="/ClubPage">
                  <ClubPage/>      
              </Route>

              <Route  exact path="/ClubDetails">
                      <ClubDetails/>
              </Route>
            </Switch>
        </Router>
        </>
  )
}

export default App