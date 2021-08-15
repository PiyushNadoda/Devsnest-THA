import React, {useState} from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


export default function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to={isLoggedIn? "/profile" : "/"}>Profile</Link>
          </li>
          <li>
            <Link to={isLoggedIn? "/dashboard" : "/"}>Dashboard</Link>
          </li>
        <li>
            <button onClick={(event) => {
              if(isLoggedIn){
                setIsLoggedIn(!isLoggedIn);
                event.target.innerHTML = 'Login';
                window.location.href =  "/";
              } else{
                setIsLoggedIn(!isLoggedIn);
                event.target.innerHTML = 'Logout';
              }
            }}> Login </button>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About isLoggedIn={isLoggedIn}/>
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/">
            <Home isLoggedIn={isLoggedIn}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home({isLoggedIn}) {
  return (<><h2>Home</h2>;
  {isLoggedIn? "" : <p> please login to get access to your profile and dashboard </p>}
  </>)
}


function About({isLoggedIn}) {
  return ( <>
  <h2>About</h2>;
  {isLoggedIn? "" : <p> please login to get access to your profile and dashboard </p>}
  </>)
}

function Profile() {
  return <h2>Profile</h2>;
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}