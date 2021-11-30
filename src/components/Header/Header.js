import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from './../../App';

const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
   
  return (
    <div>
      <Navbar className="container mt-3">
            <Container>
              <Navbar.Brand className="font-weight-bold" href="#home">Fresh Valley</Navbar.Brand>
            </Container>
            <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/orders">Orders</Link>
                <Link className="nav-link" to="/addProducts">Admin</Link>
                <Link className="nav-link" to="/deals">Deals</Link>
               <button style={{backgroundColor: '#74bc5c', width: '25%'}} className="btn text-white" type="submit"><Link to="/login">Login</Link></button>
               
            </Nav>
          </Navbar>
    </div>
  );
};

export default Header;
