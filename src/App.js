import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import About from './About'
import Clients from './Clients'
// import firebase from './firebase'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from './Dashboard';
function App() {
  React.useEffect(()=>{
    // const msg=firebase.messaging();
    // msg.requestPermission().then(()=>{
    //   return msg.getToken();
    // }).then((data)=>{
    //   console.warn("token",data)
    // })
  })

  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#dashboard">INVESTWELL APP</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link ><Link to="/">Dashboard</Link></Nav.Link>
            <Nav.Link ><Link to="/about" >About</Link></Nav.Link>
            <Nav.Link><Link to="/clients">Clients</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/about" component={About} ></Route>
          <Route path="/clients" component={Clients} ></Route>
          <Route path="/" component={Dashboard} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
