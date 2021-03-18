import React from 'react'; 
import './App.css'; 
import Navbar from './components/Navbar'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './pages'; 
import About from './pages/about';
import Contact from './pages/contact'; 
import Team from './pages/team'; 
 
import SignUp from './pages/signup'; 
  
function App() { 
  return ( 
    <Router> 
      <Navbar /> 
      <Switch> 
        <Route path='/' exact component={Home} /> 
        <Route path='/about' component={About} /> 
        
        <Route path='/contact' component={Contact} /> 
        <Route path='/team' component={Team} /> 
        
        <Route path='/sign-up' component={SignUp} /> 
      </Switch> 
    </Router> 
  ); 
} 
  
export default App; 



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
