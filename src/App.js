import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AddProducts from "./components/AddProducts/AddProducts";
import Header from "./components/Header/Header";
import { createContext, useState } from "react";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOut from './components/CheckOut/CheckOut';
export const UserContext = createContext();

function App() {
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
        <PrivateRoute path="checkOut/:id">
          <CheckOut />

        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
