import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Journey from './components/aboutMe/journey';
import Achievements from './components/aboutMe/achievements';
import Consult from './components/consult/consult';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>          
          <Route exact path="/about" render={props => <div> <Navbar {...props}/><Journey /></div> }/>
          <Route exact path="/spl" render={props => <div> <Navbar {...props}/><Achievements /></div> }/>
          <Route exact path="/:p" render={props => <div> <Navbar {...props}/><Consult /></div> }/>          
          <Route exact path="/" render={props => <div> <Navbar {...props}/><Home /></div> }/>
          <Route render={props => <div> <Navbar {...props}/><Home /></div> }/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
