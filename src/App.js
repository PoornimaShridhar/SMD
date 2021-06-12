import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact from="" render={props => <div> <Navbar {...props}/><Home /></div> }/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
