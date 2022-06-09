import React from 'react'
import Cart from './Cart';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import Single from './Single';
 function App() {
  return (
    <Router>
  
   

    <Switch>
      <Route exact path='/'><Cart/></Route>
      <Route path='/product/:id'><Single/></Route>
    </Switch>
    </Router>
  )
}
export default App