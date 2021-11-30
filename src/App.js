import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AddProducts from "./components/AddProducts/AddProducts";
import Header from "./components/Header/Header";
import { createContext, useState } from "react";

import CheckOut from './components/CheckOut/CheckOut';
export const UserContext = createContext();

function App(props) {
  const [loggedInUser,setLoggedInUser] = useState({});
 
  return (
    
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/addProducts">
          <AddProducts />
        </Route>
        <Route path="checkOut">
          <CheckOut />

        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
