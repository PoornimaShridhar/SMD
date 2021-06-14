import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Journey from './components/aboutMe/journey';
import Achievements from './components/aboutMe/achievements';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact from="/" render={props => <div> <Navbar {...props}/><Home /></div> }/>
          <Route exact from="/aboutMe" render={props => <div> <Navbar {...props}/><Journey /></div> }/>
           <Route exact from="/aboutMe/achievements" render={props => <div> <Navbar {...props}/><Achievements /></div> }/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
