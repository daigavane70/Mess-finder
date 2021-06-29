import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/index.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/AboutUs/About";
import Details from "./Pages/Profile/Profile";
import Contact from "./Pages/ContactUs/ContactUs";
import Search from "./Pages/Search/Search";
import SignIn from "./Pages/Auth/Auth";
// import Team from './Pages/Team/team';
// import MessDetails from './components/Product Details/ProductDetails';
// import SignUp from './Pages/SignUp/signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/search" component={Search} />
        <Route path="/details" component={Details} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignIn} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
